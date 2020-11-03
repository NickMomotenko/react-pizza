import React, { useState, useEffect, useRef } from "react";

import styled, { keyframes } from "styled-components";

import Typed from "react-typed";

// const textAnimation = keyframes`
//     from {
//         transform: rotate(0deg);
//     }

//     to {
//         transform: rotate(360deg);
//     }
// `;

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
      text: "Привет, я тут главный",
    },
    {
      type: "TELEPHONE",
      text: "Введи номер своего мобильного",
    },
    {
      type: "NAME",
      text: `Введи свое имя`,
    },
  ];

  //   const test = ["Привет", "Введи номер своего мобильного", "Введи свое имя"];

  const [activeText, setActiveText] = useState("Привет");

  return (
    <ConversationWrapp>
      <ConversationBla text="Привет" />
      {/* <Typed strings={test()} typeSpeed={40} /> */}
    </ConversationWrapp>
  );
};

const ConversationBla = ({ text }) => {
  const testRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [text],
      typeSpeed: 50,
    };

    const typed = new Typed(testRef.current, options);

    return () => {
      typed.destroy();
    };
  }, [text]);

  return <ConversationWrapp ref={testRef}></ConversationWrapp>;
};

export default Conversation;
