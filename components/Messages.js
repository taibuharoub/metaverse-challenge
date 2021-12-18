import { useRef } from "react";
import { useMoralis, ByMoralis, useMoralisQuery } from "react-moralis";
import Message from "./Message";
import SendMessage from "./SendMessage";

// Ony show messages from the last 15 minutes
const MINS_DURATION = 15;

function Messages() {
  const endOfMessagesRef = useRef(null);
  const { user } = useMoralis();

  //Messages, is case sensitive and must be the same as the tablefield name in your Moralis database
  const { data, loading, error } = useMoralisQuery(
    "Messages",
    (query) =>
      query
        .ascending("createdAt")
        .greaterThan(
          "createdAt",
          new Date(Date.now() - 1000 * 60 * MINS_DURATION)
        ),
    [],
    {
      live: true, //will give us a realtime listener
    }
  );

  return (
    <div className="pb-56">
      <div className="my-5">
        <ByMoralis
          variant="dark"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
      </div>

      <div className="space-y-10 p-4">
        {/* each message  */}
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>

      <div className="flex justify-center">
        {/* send message  */}
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>

      <div ref={endOfMessagesRef} className="text-center text-gray-400 mt-5">
        <p>You're up to {user.getUsername()}!🎉</p>
      </div>
    </div>
  );
}

export default Messages;
