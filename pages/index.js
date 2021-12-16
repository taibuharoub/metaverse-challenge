import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();
  console.log(isAuthenticated);

  if (!isAuthenticated) return <Login />;
  return (
    <div className="">
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Welcome the App</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
