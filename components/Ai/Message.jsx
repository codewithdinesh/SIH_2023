
import React from 'react';
import { Flex, Paper, Text, ActionIcon, Group, Textarea } from '@mantine/core';
import { IconUser } from "@tabler/icons-react";


function Message({ text, isReceived }) {

  const messageStyles = {
    marginBottom: '0.5rem', // Adjust as needed
    backgroundColor: isReceived ? '#ffedde' : 'white', // Adjust colors
    Border: isReceived ? '' : '1px solid black', // Adjust colors
    color: isReceived ? '#120e07' : 'white',
    fontWeight: "200"

  };

  const paperStyles = {
    padding: '1rem',
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
        {/* <Text size="sm">{text}</Text> */}
        <ActionIcon variant="light" mb={"lg"} style={{
          borderRadius: '50%'
        }}>
          <IconUser size="1.125rem" />
        </ActionIcon>
        <Textarea
          autosize
          minRows={1}
          value={text}
          
        />
      </Paper>
    </Flex>
  );
}

export default Message;
