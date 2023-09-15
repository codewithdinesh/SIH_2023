import Image from 'next/image'
import { Inter } from 'next/font/google'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HeroHeader from '@/components/Home/HeroHeader'
import FeatureCard from '@/components/Home/FeatureCard'
import WebFaq from '@/components/Home/WebFaq'
import Footer from '@/components/Home/Footer'
import NavBar from '@/components/NavBar'
import LowerNavBar from '@/components/Home/LowerNavBar';

const inter = Inter({ subsets: ['latin'] })

// import styles from './styles/home.module.css';


export default function Home() {
  return (
    <main
      className={`${inter.className}`}
    >
      <LowerNavBar />
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
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
