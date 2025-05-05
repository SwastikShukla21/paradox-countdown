import Head from "next/head";
// import Image from "next/image";
import CountdownTimer from "../src/components/CountdownTimer";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minheight: "100vh",
        textAlign: "center",
        backgroundColor: "#6D878F",
        margin: "0", // Add this line
        padding: "0", // Add this line
      }}
    >
      <Head>
        <title style={{ fontFamily: "oleo" }}>Paradox Countdown</title>
        <link rel="icon" href="/favicon.ico" />
        {/* Import the font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Merienda:wght@300..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cookie&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Oleo+Script&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <CountdownTimer targetDate="2025-06-03" />
    </div>
  );
}
