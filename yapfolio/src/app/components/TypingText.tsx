"use client";

import { useState, useEffect } from "react";

export default function TypingText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayText((prev) => prev + text[index]);
      index++;
      if (index === text.length) clearInterval(intervalId);
    }, 100);

    return () => clearInterval(intervalId);
  }, [text]);

  return <h1 id="typing-text">{displayText}</h1>;
}
