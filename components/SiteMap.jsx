// pages/sitemap.js

import React from 'react';
import Link from 'next/link';

const SiteMap = () => {
    const navbarLinks = [
        {
            label: 'Legal Help',
            link: '/#',
            links: [
                {
                    label: 'Bare Act',
                    link: '/acts',
                },
                {
                    label: 'Articles',
                    link: '/articles',
                },
                {
                    label: 'Indian Constitution',
                    link: '/constitution',
                },
            ],
        },
        {
            label: 'Summarization',
            link: '/ai/summarize',
        },
        {
            label: 'Document Chat',
            link: '/ai/chat/doc',
        },
        {
            label: 'Chatbot',
            link: '/ai/chat',
        },
        {
            label: 'Hire Lawyer',
            link: '/hire-lawyer',
        },
    ];

    return (
        <div style={{ padding: "1em" }}>
            <h1>Site Links</h1>
            <ul>
                {navbarLinks.map((navItem, index) => (
                    <li key={index}>
                        {navItem.links ? (
                            <div>
                                {navItem.label}
                                <ul>
                                    {navItem.links.map((subItem, subIndex) => (
                                        <li key={subIndex}>
                                            <Link href={subItem.link} >
                                                {subItem.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <Link href={navItem.link}>
                                {navItem.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SiteMap;
