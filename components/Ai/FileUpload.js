import React from 'react';
import { Container, FileInput } from '@mantine/core';
import { IconUpload } from '@tabler/icons-react';

const FileUpload = () => {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Container size="md">
                <FileInput label="Your resume" placeholder="Your resume" icon={<IconUpload size={14} />} />
            </Container>
        </div>
    );
}

export default FileUpload;
