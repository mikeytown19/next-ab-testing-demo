import Head from 'next/head'
import { styled } from '../stitches.config'

import { useExperiment } from "@tstmkrs/nextjs-ab-test";
import StarWars from './StarWars'
import Pokemon from './Pokemon'

const PageExperiment = () => {
  const { Variant } = useExperiment({
    name: "Page-Test",
    weight: [50, 50],
    variants: {
      A: <>
        <Head>
          <title>Star Wars!</title>,
        </Head>
        <Container size={{ '@initial': '1', '@bp1': '2' }}>
          <StarWars />
        </Container></>,
      B: <>
        <Head>
          <title>Pokemon!</title>
        </Head>
        <Container size={{ '@initial': '1', '@bp1': '2' }}>
          <Pokemon />
        </Container>
      </>
    }
  });

  return <><Variant /></>
}

export default function Home() {

  return (
    <Box css={{ paddingY: '$6' }}>
      <PageExperiment />
    </Box>
  )
}


const Box = styled('div', {})


const Container = styled('div', {
  marginX: 'auto',
  paddingX: '$3',

  variants: {
    size: {
      1: {
        maxWidth: '300px',
      },
      2: {
        maxWidth: '585px',
      },
      3: {
        maxWidth: '865px',
      },
    },
  },
})