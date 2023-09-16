import React from 'react'
import ActCard from './ActCard'
import Link from 'next/link';
import { SimpleGrid } from '@mantine/core';

// import fetch from "node-fetch";

const ActCards = () => {

  const actsData = [
    {
      slug: 'constitution-of-india',
      title: 'Constitution of India Bare Act',
      category: 'Constitutional Law',
    },
    {
      slug: 'cpc',
      title: 'CPC (Civil Procedure Code) Bare Act',
      category: 'Civil Procedure Code',
    },
    {
      slug: 'crpc',
      title: 'CrPC (Code of Criminal Procedure) Bare Act',
      category: 'Criminal Law',
    },
    {
      slug: 'domestic-violence',
      title: 'Domestic Violence Bare Act',
      category: 'Family Law',
    },
    {
      slug: 'hma',
      title: 'HMA (Hindu Marriage Act) Bare Act',
      category: 'Family Law',
    },
    {
      slug: 'income-tax',
      title: 'Income Tax Bare Act',
      category: 'Taxation Law',
    },
    {
      slug: 'ipc',
      title: 'IPC (Indian Penal Code) Bare Act',
      category: 'Criminal Law',
    },
    {
      slug: 'juvenile-justice',
      title: 'Juvenile Justice Bare Act',
      category: 'Criminal Law',
    },
    {
      slug: 'posh',
      title: 'Posh (Prevention of Sexual Harassment) Bare Act',
      category: 'Labour Law',
    },
    {
      slug: 'transfer-of-property',
      title: 'Transfer of Property Bare Act',
      category: 'Property Law',
    },
  ];
  return (
    <div style={{
      padding: "1rem",

    }}>

      {/* Show all ActCard, and render from here */}
      <SimpleGrid
        cols={5}
        spacing="lg"
        verticalSpacing="xl"
        breakpoints={[
          { maxWidth: '62rem', cols: 3, spacing: 'md' },
          { maxWidth: '48rem', cols: 2, spacing: 'sm' },
          { maxWidth: '36rem', cols: 1, spacing: 'sm' },
        ]}
      >
        {
          actsData?.map((act, index) => {
            return <Link href={"./acts/" + act.slug} key={act.slug} style={{ textDecoration: "none", color: "black" }}>
              <ActCard act={act.title} />
            </Link>

          })
        }
      </SimpleGrid>
    </div>
  )
}

export default ActCards