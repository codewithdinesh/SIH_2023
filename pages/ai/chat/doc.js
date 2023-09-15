import FileUpload from '@/components/Ai/FileUpload'
import { Container, Title } from '@mantine/core'
import React from 'react'

const doc = () => {
  return (
    <Container size={'xl'}>

      <Title order={1}>       
       Upload Your Legal Document and Get Summarized Output
      </Title>

      <FileUpload />
    </Container>
  )
}

export default doc