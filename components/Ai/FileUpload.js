// import React, { useState } from 'react';
// import { Container, FileInput, Paper, Text } from '@mantine/core';
// import { IconUpload } from '@tabler/icons-react';

// const FileUpload = () => {
//     const [selectedFile, setSelectedFile] = useState(null);

//     const handleFileChange = (files) => {
//         if (files.length > 0) {
//             const file = files[0];
//             setSelectedFile(file);
//         }
//     };

//     return (
//         <div style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//             <Container size="md">
//                 <Paper style={{
//                     width: '100%',
//                     border: '5px #452b10 dashed',
//                     borderRadius: '40px',
//                     backgroundColor : "#f4eee4",
//                     padding: "4rem 8rem",
//                     display: "flex",
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     justifyContent: 'space-between',
//                     gap: '5rem',
//                     minWidth: '275px'
//                 }} padding="2xl" shadow="xs" justify="center"
//                     align="center">
//                     <h1>File Upload and Summarization</h1>
//                     <FileInput
//                         label="Upload Your File"
//                         placeholder="File Goes Here"
//                         icon={<IconUpload size={14} />}
//                         onChange={handleFileChange}
//                     />
//                     {selectedFile && (
//                         <div>
//                             <Text size="lg" weight={500} className="mt-4">
//                                 Selected File:
//                             </Text>
//                             <Paper padding="md">{selectedFile.name}</Paper>
//                         </div>
//                     )}
//                 </Paper>
//             </Container>
//         </div>
//     );
// };

// export default FileUpload;


import { useRef } from 'react';
import { Text, Group, Button, createStyles, rem } from '@mantine/core';
import { Dropzone, MIME_TYPES } from '@mantine/dropzone';
import { IconCloudUpload, IconX, IconDownload } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
    wrapper: {
        position: 'relative',
        marginBottom: rem(30),
    },

    dropzone: {
        borderWidth: rem(1),
        paddingBottom: rem(50),
    },

    icon: {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
    },

    control: {
        position: 'absolute',
        width: rem(250),
        left: `calc(50% - ${rem(125)})`,
        bottom: rem(-20),
    },
}));

const DropzoneButton = () => {
    const { classes, theme } = useStyles();
    const openRef = useRef(null);

    return (
        <div className={classes.wrapper}>
            <Dropzone
                openRef={openRef}
                onDrop={() => { }}
                className={classes.dropzone}
                radius="md"
                accept={[MIME_TYPES.pdf]}
                maxSize={30 * 1024 ** 2}
            >
                <div style={{ pointerEvents: 'none' }}>
                    <Group position="center">
                        <Dropzone.Accept>
                            <IconDownload
                                size={rem(50)}
                                color={theme.colors[theme.primaryColor][6]}
                                stroke={1.5}
                            />
                        </Dropzone.Accept>
                        <Dropzone.Reject>
                            <IconX size={rem(50)} color={theme.colors.red[6]} stroke={1.5} />
                        </Dropzone.Reject>
                        <Dropzone.Idle>
                            <IconCloudUpload
                                size={rem(50)}
                                color={theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black}
                                stroke={1.5}
                            />
                        </Dropzone.Idle>
                    </Group>

                    <Text ta="center" fw={700} fz="lg" mt="xl">
                        <Dropzone.Accept>Drop files here</Dropzone.Accept>
                        <Dropzone.Reject>Pdf file less than 30mb</Dropzone.Reject>
                        <Dropzone.Idle>Upload Document</Dropzone.Idle>
                    </Text>
                    <Text ta="center" fz="sm" mt="xs" c="dimmed">
                        Drag&apos;n&apos;drop files here to upload. We can accept only <i>.pdf</i> files that
                        are less than 30mb in size.
                    </Text>
                </div>
            </Dropzone>

            <Button className={classes.control} size="md" radius="xl" onClick={() => openRef.current?.()}>
                Select files
            </Button>
        </div>
    );
}

export default DropzoneButton