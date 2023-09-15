
import React from 'react';
import { Flex, Paper, Text } from '@mantine/core';

function Message({ text, isReceived }) {

  const messageStyles = {
    marginBottom: '0.5rem', // Adjust as needed
    backgroundColor: isReceived ? 'lightblue' : 'lightgreen', // Adjust colors
  
  };

  const paperStyles = {
    padding: 'sm',
    maxWidth: '80%',
    padding: '1rem',
    flex: "1",
    justify: "flex-end",
    alignSelf: 'flex-end',
    align: "flex-end",
    ...messageStyles,
  };

  return (
    <Flex style={{
      flexDirection: isReceived ? "" : "row-reverse",
    }}>
      <Paper style={paperStyles}>
        <Text size="sm">{text}</Text>
      </Paper>
    </Flex>
  );
}

export default Message;
