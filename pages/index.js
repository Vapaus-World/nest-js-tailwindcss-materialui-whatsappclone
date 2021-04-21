import Head from "next/head";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";

export default function Home() {
  return (
    <div className="h-screen grid">
      <Head>
        <title>Whats app Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen w-screen justify-between">
        <LeftBar />
        <RightBar />
      </div>
    </div>
  );
}
