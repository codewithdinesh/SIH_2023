// components/Chat.js
import React, { useState } from 'react';
import { Container, Paper, Input, Button, Flex, Title } from '@mantine/core';
import Message from './Message';
import { IconSend } from "@tabler/icons-react";
import { Loader } from '@mantine/core';


function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [Response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const onRequest = async (da) => {
    setIsLoading(true);
    let headersList = {
      Accept: '*/*',
      Authorization: 'Bearer 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',
      'Content-Type': 'text/plain',
    };

    let bodyContent = "<S> " + da + " [bot]: ";

    try {
      let response = await fetch(
        'https://api-inference.huggingface.co/models/parthsolanke/SaulGPT2',
        {
          method: 'POST',
          body: bodyContent,
          headers: headersList,
        }
      );

      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }

      let data = await response.json();
      console.log(data[0]?.generated_text?.split("[bot]:")[1]);
      const r = data[0]?.generated_text?.split("[bot]:")[1]

      console.log(da + ": " + r);
      setResponse(r);

    } catch (error) {
      console.error('Fetch error:', error);
      setResponse([]);
    } finally {
      setIsLoading(false); // Set loading to false after the request, whether successful or not
    }
  };




  const handleInputTextChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = async () => {
    console.log("ookk")
    if (inputText.trim() !== '') {
      addMessage(inputText, false);

      setInputText('');

      let headersList = {
        Accept: '*/*',
        Authorization: 'Bearer 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',
        'Content-Type': 'text/plain',
      };

      let bodyContent = "<S> " + inputText + " [bot]: ";

      try {
        let response = await fetch(
          'https://api-inference.huggingface.co/models/parthsolanke/SaulGPT2',
          {
            method: 'POST',
            body: bodyContent,
            headers: headersList,
          }
        );

        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }

        let data = await response.json();
        console.log(data[0]?.generated_text?.split("[bot]:")[1]);
        const raw_data = data[0]?.generated_text?.split("[bot]:")[1]

        // addMessage(raw_data, true)

        let nextResponse = await fetch('https://api-inference.huggingface.co/models/facebook/bart-large-cnn', {
          method: 'POST', // or 'POST' or any other HTTP method
          body: raw_data,
          headers: headersList,
        });

        if (!nextResponse.ok) {
          throw new Error(`Request failed with status: ${nextResponse.status}`);
        }

        let nextData = await nextResponse.json();
        // console.log('Next data:', nextData[0]?.summary_text);


        addMessage(nextData[0]?.summary_text, true);

      } catch (error) {
        console.error('Fetch error:', error);
        setResponse([]);
      } finally {
        setIsLoading(false); // Set loading to false after the request, whether successful or not
      }

      console.log("Response: ", Response?.generated_text)
      // setResponse(Response)

    }
  };


  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevents a newline character in the input field
      handleSendMessage();
    }
  };

  // Create a new message object
  const addMessage = (text, isReceived) => {
    const newMessage = {
      id: messages.length + 1,
      text: text,
      isReceived: isReceived,
    };

    // Use the callback function to ensure you are working with the updated state
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // console.log(messages); // This may not show the updated state immediately
  };

  const i = isLoading ? <Loader color="dark" /> : <IconSend title="Send" onClick={handleSendMessage} />
  return (
    <>

      <Title ta={"center"} m={"lg"}>
        Legal Assistant
      </Title>
      <Container
        size="md"
        style={{
          height: '75vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end', // Align inner div to the bottom
          border: "1px solid black",
          borderRadius: "12px"
        }}
      >
        <div style={{ flex: '1', overflowY: 'auto', marginBottom: '1rem', padding: "12px" }}>
          {messages.map((message, index) => (
            console.log(message),

            <Message key={index} text={message.text} isReceived={message.isReceived} />
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
            rightSection={<IconSend title="Send" onClick={handleSendMessage} />}
          />
        </div>
      </Container>
    </>
  );
}

export default Chat;
