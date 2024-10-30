"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [message, setMessage] = useState("Hope you're Doing Well");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const messageTimer = setTimeout(() => {
      setMessage("Welcome!");
    }, 2000);

    const visibilityTimer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => {
      clearTimeout(messageTimer);
      clearTimeout(visibilityTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="loading-screen" id="loadingScreen">
      <div className="animation">
        <iframe
          src="https://lottie.host/embed/bc8cc1f9-2ccc-4799-8700-0b790724d952/9yJvqv8x7v.json"
          width={500}
          height={500}
        ></iframe>
      </div>
      <div className="message">
        <p id="messageText">{message}</p>
      </div>
    </div>
  );
}
