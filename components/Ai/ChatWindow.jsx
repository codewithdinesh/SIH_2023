// components/Chat.js
import React, { useState } from 'react';
import { Container, Paper, Input, Button, Flex } from '@mantine/core';
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
    <Container
      size="md"
      style={{
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end', // Align inner div to the bottom
        
      }}
    >
      <h1>
        Legal Assistant
      </h1>
      <div style={{ flex: '1', overflowY: 'auto', marginBottom: '1rem' }}>
        {messages.map((message, index) => (

          <Message key={index} text={message.text} />
        ))}
      </div>
      <div>
        <Input
          placeholder="Type your message..."
          value={inputText}
          onChange={handleInputTextChange}
          onKeyDown={handleKeyPress}
          size="lg"
          rightSection={
            <IconSend title="Send" onClick={handleSendMessage} />
          }
        />

      </div>

    </Container>
  );
}

export default Chat;
