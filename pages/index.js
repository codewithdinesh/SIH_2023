import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HeroHeader from '@/components/Home/HeroHeader'
import FeatureCard from '@/components/Home/FeatureCard'
import WebFaq from '@/components/Home/WebFaq'
import Footer from '@/components/Home/Footer'
import NavBar from '@/components/NavBar'
import LowerNavBar from '@/components/Home/LowerNavBar';
import { Affix, Button, rem } from '@mantine/core'
import { IconMessages } from '@tabler/icons-react'
import { useTranslation } from "next-i18next";
const inter = Inter({ subsets: ['latin'] })

// import styles from './styles/home.module.css';


export default function Home() {
  const { t } = useTranslation("common");
  return (
    <main
      className={`${inter.className}`}
    >
      {/* <LowerNavBar /> */}
      <Affix position={{ bottom: rem(20), right: rem(20) }}>
        <Link href='/ai/chat'>
          <Button size='lg' leftIcon={<IconMessages />} >{t("Chatbot")}</Button>
        </Link>
      </Affix>
      <HeroHeader />
      <FeatureCard />
      <WebFaq />
    </main>
  )
}


export async function getStaticProps({ locale }) {
  // extract the locale identifier from the URL
  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  };
}
