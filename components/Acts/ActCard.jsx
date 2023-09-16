import React, { useState } from 'react';
import { Card, Text, SimpleGrid, rem } from '@mantine/core';

function ActCard({ act }) {
    const [isHovered, setIsHovered] = useState(false);

    const cardStyle = {
        padding: '2rem',
        backgroundColor: isHovered ? '#fcebcd' : '#fff5e0',
        borderRadius: '8px',
        margin: '3px',
        cursor: 'pointer',
        display: "flex",
        justifyItems: "center",
        alignItems: "center",
        minHeight: rem(120),
        transition: 'background-color 0.2s ease-in-out', // Add a smooth transition

    };

    return (

        <Card
            style={cardStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Text size="lg" >{act}</Text>
        </Card>

    );
}

export default ActCard;
