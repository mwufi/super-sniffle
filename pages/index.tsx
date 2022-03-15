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

const author = {
  profile: 'https://www.linkedin.com/in/zen-tang-492720136/',
  name: 'Zen Tang',
}

const credits = (
  <Slide left>
    <Heading>
      Thanks for <GradientText>listening</GradientText>
    </Heading>
    <Text>
      You're always welcome to talk to{' '}
      <a className="underline" href={author.profile} target="_blank">
        {author.name}
      </a>
    </Text>
    <button onClick={() => alert('not implemented yet!')}>
      like this presentation
    </button>
  </Slide>
)

const Home: NextPage = () => {
  return (
    <div className="space-y-0.5 bg-orange-200 p-0.5">
      <Head>
        <title>Allo - Government as a Service</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Slide center>
        <Heading>AlloGov</Heading>
        <SubHeading>
          One-click <GradientText>government</GradientText>
        </SubHeading>
        <div>March 14, 2022</div>
      </Slide>

      <Slide dark left>
        <SubHeading>
          Cities today are <GradientText>limited</GradientText>
        </SubHeading>
        <Text>
          <li>Huge challenges, like homelessness or fiscal shortfalls</li>
          <li>Traditional tools like contracts can't solve that</li>
          <li>
            Government needs innovation{' '}
            <GradientText>from the outside</GradientText>
          </li>
        </Text>
      </Slide>

      <Slide left dark>
        <Text>
          Challenge: make it so that <GradientText>anyone</GradientText> can
          contribute to solving a city's problems
        </Text>
      </Slide>

      <Slide>
        <Heading>
          Solution: <br />
          Bring cities <GradientText>online.</GradientText>
        </Heading>
        <SubHeading>
          <Text>An app in everyone's pocket</Text>
          <Text>
            We do the hard work of government integration, from identity to
            services to processes
          </Text>
          <Text>Result: New types of experiences.</Text>
        </SubHeading>
      </Slide>
      <Slide>
        <Heading>
          Easy. Helpful. <GradientText>CityPass.</GradientText>
        </Heading>
        <SubHeading>
          <Text>Digital services, courtesy of the city</Text>
          <Text>
            A <GradientText>cash voucher app</GradientText> that allows
            municipal governments to budget up to $10 per citizen, per month.
          </Text>
          <Text>Forums, local events, sign in to the library, etc.</Text>
        </SubHeading>
      </Slide>

      <Slide>
        <Heading>For governments</Heading>
        <Text>
          Replace complicated processes. Offer world-class experiences.
        </Text>
        <Text>
          Ship <GradientText>open APIs</GradientText> for young innovators and
          developers
        </Text>
        <Text>Save on software (and more), and let the people know</Text>
        <Text>
          Get <GradientText>more insight</GradientText> from citizens
        </Text>
      </Slide>

      <Slide>
        <SubHeading>Huge market</SubHeading>
        <SubHeading>$400B + $XXB + $XXB</SubHeading>
        <Text>Combination of govtech, crypto, and consumer</Text>
        <Text><GradientText>premium subscriptions</GradientText> - $600M/year - $5/mo * 10M people </Text>
        <Text><GradientText>payments</GradientText> - $100M/year - 1% * 100M people * $100/year </Text>
        <Text><GradientText>government as the customer</GradientText> - $600M/year - $5000/mo * 10k cities </Text>
      </Slide>
      <Slide>
        <SubHeading>Competition</SubHeading>
      </Slide>
    </div>
  )
}

export default Home
