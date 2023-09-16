import ActCards from '@/components/Acts/ActCards'
import { Title } from '@mantine/core'
import React from 'react'

const index = () => {
  return (
    <div>

      {/* Here all acts Cards will be shown... */}

      {/* <p> Components: ActCards, ActCard,  </p> */}
      <Title ta={"center"} m={"lg"}>
        Legal Acts
      </Title>
      <ActCards />

    </div>
  )
}

export default index