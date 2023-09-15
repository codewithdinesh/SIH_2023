// components/Chat.js
import React, { useState } from 'react';
import { Container, Paper, Input, Button, Flex, Title } from '@mantine/core';
import Message from './Message';
import { IconSend } from "@tabler/icons-react";


function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputTextChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      setMessages([...messages, { text: inputText }]);
      setInputText('');
    }
  };

  // when user lcick on enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevents a newline character in the input field
      handleSendMessage();
    }
  };

  return (
    <>

    <Title ta={"center"} m={"lg"}>
      Legal Assistant
    </Title>
    <Container
      size="md"
      style={{
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end', // Align inner div to the bottom
        border:"1px solid black",
        borderRadius:"12px"
      }}
    >
      <div style={{ flex: '1', overflowY: 'auto', marginBottom: '1rem', padding:"12px" }}>
        {messages.map((message, index) => (

          <Message key={index} text={message.text} isReceived={true} />
        ))}
      </div>
      <div>
        <Input
          placeholder="Type your message..."
          value={inputText}
          onChange={handleInputTextChange}
          onKeyDown={handleKeyPress}
          size="lg"
          m={"lg"}
          rightSection={
            <IconSend title="Send" onClick={handleSendMessage} />
          }
        />
      </div>
    </Container>
    </>
  );
}

export default Chat;
