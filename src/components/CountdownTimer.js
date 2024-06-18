import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head"; // Import Head component from Next.js
import ConfettiAnimation from "./ConfiettiAnimation"; // Import ConfettiAnimation component

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const tdate = new Date(targetDate);

    const tdate1 = new Date(targetDate);
    // console.log("tdate", tdate);
    const difference = new Date(targetDate) - new Date() - 19800000;
    // console.log("difference", typeof difference);

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      difference: difference,
      // days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      // hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      // minutes: Math.floor((difference / 1000 / 60) % 60),
      // seconds:10,
      // difference: difference,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <>
      {timeLeft.difference <= 0 ? (
        <>  "HIii"
          <ConfettiAnimation /> {/* Add ConfettiAnimation component */}
          {/* <div className="relative">
            <div className="flex items-center justify-center pt-30 pb-5">
              <h1
                className="text-7xl font-bold"
                style={{
                  fontFamily: "Merienda",
                  fontSize: "48px",
                  background: "-webkit-linear-gradient(#d902ee, #ffd79d)",
                  // background: "-webkit-linear-gradient(#405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Time for Paradox 🎉
              </h1>

              <div className="flex items-center justify-center">
                <img
                  className="h-[250px] w-[250px] rounded-full"
                  // src="https://static.vecteezy.com/system/resources/previews/005/076/592/non_2x/hacker-mascot-for-sports-and-esports-logo-free-vector.jpg"
                  src="./us.jpg"
                  alt="Test"
                  style={{
                    maxWidth: "400px",
                    maxHeight: "400px",
                    borderRadius: "10%",
                  }}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "20px 0",
              }}
            >
              <img
                className="h-[250px] w-[250px] rounded-full"
                src="/party-celebration.gif"
                alt="Test"
                style={{
                  maxWidth: "400px",
                  maxHeight: "250px",
                  borderRadius: "50%",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                
                <img
                  src="./ballon.gif"
                  style={{
                    maxWidth: "180px",
                    maxHeight: "180px",
                    borderRadius: "12.5%",
                  }}
                />
              </div>

              <img
                className="h-[250px] w-[250px] rounded-full transform rotate-180"
                src="/party-celebration.gif"
                alt="Test"
                style={{
                  maxWidth: "250px",
                  maxHeight: "250px",
                  borderRadius: "50%",
                  transform: "scaleX(-1) rotate(360deg)", // Flip horizontally and then rotate
                }}
              />
            </div>
          </div> */}
        </>
      ) : (
        <>
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#6D878F",
            }}
          >
            <div style={{ fontSize: "3.0rem", color: "#fff" }}>
              Paradox Is Too Far Away
            </div>
            <div
              className="text-center"
              style={{ fontSize: "3.0rem", color: "#fff" }}
            >
              Time Remaining
            </div>
            <div
              style={{
                fontSize: "2.5rem",
                color: "#fff",
                animation:
                  timeLeft.seconds === 10
                    ? "pulse-10s 1s infinite alternate"
                    : "pulse 1s infinite alternate",
              }}
            >
              {timeLeft.days !== 0 ? timeLeft.days + "d" : ""}{" "}
              {timeLeft.hours !== 0 ? timeLeft.hours + "h" : ""}{" "}
              {timeLeft.minutes !== 0 ? timeLeft.minutes + "m" : ""}{" "}
              {timeLeft.seconds}s
            </div>
            <div style={{ fontSize: "3.0rem", color: "#fff" }}>
              until Paradox 2025!
            </div>
            <div
              className="image-container"
              style={{ position: "relative", marginTop: "20px" }}
            >
              <Image
                src="/island.webp"
                alt="Birthday Person"
                width={500}
                height={500}
              />
            </div>
          </div>
          <style jsx>{`
            @keyframes pulse {
              0% {
                transform: scale(1);
              }
              50% {
                transform: scale(1.2);
              }
              100% {
                transform: scale(1);
              }
            }

            @keyframes pulse-10s {
              0%,
              100% {
                transform: scale(1);
              }
              50% {
                transform: scale(1.5);
              }
            }
          `}</style>
        </>
      )}
    </>
  );
};

export default CountdownTimer;
