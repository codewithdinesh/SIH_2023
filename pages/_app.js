import { AppProps } from 'next/app';
import { appWithTranslation } from "next-i18next";
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Home/Footer.jsx';


// import "@/styles/globals.css";

const App = (props) => {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>LegalSathi</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
          // primaryColor: '#452b01',
          colors: {
            'bg': ["#f8f4ed", "#e6ddce", "#d7c6ac", "#c7b089", "#b99967", "#a0804d", "#7c643d", "#59472c", "#352a1a", "#120e07"],
            'Text': ["#f8f4ed", "#e6ddce", "#d7c6ac", "#c7b089", "#b99967", "#a0804d", "#7c643d", "#59472c", "#352a1a", "#120e07"],
            'btn': ["#fff5e0", "#fee1b4", "#fcce84", "#fbba54", "#faa727", "#e08e14", "#af6f0d", "#7d4e06", "#4b2f01", "#1b0f00"],
            "accent": ["#ffedde", "#ffceb1", "#ffb080", "#fe904e", "#fe711e", "#e55805", "#b24402", "#803000", "#4e1c00", "#1f0800"]
          },
          primaryColor: 'btn',
          primaryShade: 8,
          fontFamily: 'Karla, sans-serif',
          // fontFamilyMonospace: 'Monaco, Courier, monospace',
          headings: { fontFamily: 'Inconsolata, sans-serif' },
        }}
      >
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </MantineProvider>
    </>
  );
}

export default appWithTranslation(App);
