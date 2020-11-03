import React, { useState, useEffect, useRef } from "react";

import styled from "styled-components";

import ReactTypingEffect from "react-typing-effect";

const ConversationWrapp = styled.div`
  background: #fff;
  width: 300px;
  padding: 10px;
  border-radius: 0 25px 25px 25px;

  position: absolute;
  top: 64px;
  left: 75%;
`;

const ConversationText = styled.div`
  display: inline-block;
`;

const Conversation = () => {
  const texts = [
    {
      type: "HELLO",
      text: "Привет...",
    },
    {
      type: "TELEPHONE",
      text: "Введи номер своего мобильного",
    },
    {
      type: "NAME",
      text: "Введи свое имя",
    },
  ];

  const [activeText, setActiveText] = useState("");

  const [hash, setHash] = useState(window.location.hash);

    useEffect(() => {
      if (window.location.hash != hash) {
        setHash(window.location.hash);
      }
    });

  useEffect(() => {
    if (hash === `#/login`) {
      setActiveText(
        generateActiveText(
          texts.map((item) => item.type == "HELLO" && item.text)
        )
      );

      generateDelay(4000);
    }

    if (hash === "#/login/phone") {
      setActiveText(
        generateActiveText(
          texts.map((item) => item.type == "TELEPHONE" && item.text)
        )
      );

      generateDelay(5000);
    }

    if (hash === "#/login/name") {
      setActiveText(
        generateActiveText(
          texts.map((item) => item.type == "NAME" && item.text)
        )
      );

      generateDelay(5000);
    }
  }, [hash]);

  const generateActiveText = (text) => text || "";

  const generateDelay = (time) => {
    return time || 1000;
  };

  return (
    <>
      <ConversationWrapp>
        <ReactTypingEffect
          text={activeText}
          typingDelay={0}
          speed={100}
          eraseDelay={generateDelay()}
        />
      </ConversationWrapp>
    </>
  );
};

export default Conversation;
