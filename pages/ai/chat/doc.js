import FileUpload from '@/components/Ai/FileUpload'
import { Container, Title } from '@mantine/core'
import React from 'react'

const doc = () => {
  return (
    <Container size={'xl'}>
      <FileUpload />
    </Container>
  )
}

export default doc