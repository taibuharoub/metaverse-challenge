import Head from "next/head";
import Login from "../components/Login";

export default function Home() {
  const isAuthenticated = false;
  console.log(!isAuthenticated);

  if (!isAuthenticated) return <Login />;
  return (
    <div className="">
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Welcome the App</h1>
    </div>
  );
}
