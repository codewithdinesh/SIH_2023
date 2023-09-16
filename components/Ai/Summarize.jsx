import React, { useState } from 'react';
import { Text, Button, Textarea, rem, Title, Stack, Box } from '@mantine/core';
import { FileUpload } from '/components/Ai/FileUpload';

const Summarize = () => {
  const [SummarizeResponse, setResponse] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputTextChange = (e) => {
    setInputText(e.target.value);
  };

  const onRequest = async (da) => {
    setIsLoading(true);
    let headersList = {
      Accept: '*/*',
      'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
      Authorization: 'Bearer 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',
      'Content-Type': 'text/plain',
    };

    let bodyContent = da;

    try {
      let response = await fetch(
        'https://api-inference.huggingface.co/models/facebook/bart-large-cnn',
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
      console.log(data);

      setResponse(data);
    } catch (error) {
      console.error('Fetch error:', error);
      setResponse([]);
    } finally {
      setIsLoading(false); // Set loading to false after the request, whether successful or not
    }
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      onRequest(inputText);
    }
  };

  return (
    <Stack align='center' mt={50}>
      <Title>Summarization Tool</Title>

      <Text>Upload the legal content and get it summarized</Text>

      <Textarea
        placeholder='Enter text for summarizing'
        label='Enter text'
        style={{ width: rem(800) }}
        autosize
        minRows={5}
        onChange={handleInputTextChange}
      />

      <Button size='lg' onClick={handleSendMessage} loading={isLoading}>
        Summarize
      </Button>

      <Textarea
        placeholder='Write some data in the above textbox and then click Summarize button'
        label='Your summarized data'
        autosize
        minRows={5}
        value={SummarizeResponse[0]?.summary_text || ''} // Handle empty or non-array response
        style={{ minWidth: rem(800) }}
      />
    </Stack>
  );
};

export default Summarize;
