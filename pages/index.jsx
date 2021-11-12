import Head from 'next/head'
import { styled } from '../stitches.config'
import { useRouter } from 'next/router'


import { useExperiment } from "@tstmkrs/nextjs-ab-test";
import StarWars from './starwars'
import Pokemon from './pokemon'

const PageExperiment = () => {
  const { Variant, } = useExperiment({
    name: "Page-Test",
    weight: [50, 50],
    variants: {
      A: <StarWars />,
      B:<Pokemon />
    }
  });
  return <><Variant /></>
}

export default function Home() {
  const router = useRouter()

  return (
    <Box css={{ paddingY: '$6' }}>
      <PageExperiment />
    </Box>
  )
}


const Box = styled('div', {})


