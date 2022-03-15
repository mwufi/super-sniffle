import type { NextPage } from 'next'
import Head from 'next/head'
import GradientText from '../components/GradientText'
import cx from 'classnames'
import {
  Slide,
  Heading,
  SubHeading,
  Text,
  Image,
} from '../components/BasicSlides'

const Home: NextPage = () => {
  return (
    <div className="space-y-0.5 bg-orange-200 p-0.5">
      <Head>
        <title>Allo - Government as a Service</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Slide>
        <Heading>
          You're a food <GradientText>monkey</GradientText>
        </Heading>
      </Slide>
    </div>
  )
}

export default Home
