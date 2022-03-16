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
    <div>I still need to refine this idea.</div>
    <button onClick={() => alert('not implemented yet!')}>
      like this presentation
    </button>
  </Slide>
)

const quote = (
  <Slide left dark>
    <Text>
      Challenge: make it so that <GradientText>anyone</GradientText> can
      contribute to solving a city's problems
    </Text>
  </Slide>
)

const intro = (
  <Slide>
    <Heading>
      <GradientText>Hi, I'm Zen</GradientText>
    </Heading>
    <Text>
      Thinking a lot lately about <GradientText>government</GradientText>, and
      how it works, and how to make it better.
    </Text>
    <Text>(like this style? Grab it on Github)</Text>
  </Slide>
)
const work = (
  <Slide dark>
    <Heading>Work Experience</Heading>
    <Heading>
      <GradientText>Wayve</GradientText>
    </Heading>
    <SubHeading>Self driving cars</SubHeading>
    <Text>
      2019 - 2020. I used to be really interested in self-driving, and AI! Out
      of the blue, I emailed the founder, after coming across his paper -- and
      moved to London!
    </Text>
    <div className="pt-4"></div>
    <Heading>
      <GradientText>TikTok</GradientText>
    </Heading>
    <SubHeading>Recommendations team</SubHeading>
    <Text>
      Recommendations is interesting. Surprisingly, a lot of it turns out to be
      about the ecosystem, and how to improve it!
    </Text>
    <Text>
      Come join us! If you're interested in what happens "behind the scenes", or
      in working in a cool org, this is a great place to be!
    </Text>
  </Slide>
)

const Home: NextPage = () => {
  return (
    <div className="space-y-1 bg-orange-200 p-1 md:p-3">
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
        <div className="uppercase">problem</div>
        <SubHeading>
          Participating in "government" is <GradientText>hard</GradientText>
        </SubHeading>
        <Text>
          <li>
            <GradientText>Lack of visibility</GradientText> - Most people don't
            care. Good decisions are rarely recognized by the public
          </li>
          <li>
            <GradientText>UX</GradientText> - High friction, and no P2P
            information besides... city council meetings
          </li>
        </Text>
        <Text>
          Meanwhile, <GradientText>challenges loom</GradientText>, like
          homelessness or fiscal shortfalls. But no one is responsible for
          fixing these issues
        </Text>
      </Slide>

      <Slide>
        <div className="uppercase">solution</div>

        <Heading>
          an app that <br />
          <GradientText>connects you</GradientText> <br />
          in every city
        </Heading>
        <SubHeading>
          <Text>Fun to use</Text>
          <Text>
            Relevant, social, useful...{' '}
            <GradientText>and also used by government</GradientText>
          </Text>
          <Text>Result: New types of experiences.</Text>
        </SubHeading>
      </Slide>

      <Slide>
        <SubHeading>
          Ubiquitous. <GradientText>CityPass.</GradientText>
        </SubHeading>
        <SubHeading>
          <Text>Local events, discussions</Text>
          <Text>
            A <GradientText>cash account</GradientText> that allows municipal
            governments to budget up to $10 per citizen, per month.
          </Text>
          <Text>
            A secure <GradientText>extensible identity</GradientText>
          </Text>
        </SubHeading>
        <div>or, Metamask meets WeChat?</div>
      </Slide>

      <Slide dark>
        <div className="uppercase">market size</div>
        <SubHeading>Govtech is a growing market</SubHeading>
        <Text>Rough estimate:</Text>
        <Text>
          <GradientText>subscriptions</GradientText> - $600M/year - $5/mo * 10M
          people{' '}
        </Text>
        <Text>
          <GradientText>payments</GradientText> - $100M/year - 1% * 100M people
          * $100/year{' '}
        </Text>
        <Text>
          <GradientText>software</GradientText> - $600M/year - $5000/mo * 10k
          cities{' '}
        </Text>
      </Slide>

      <Slide>
        <SubHeading>Adoption Strategy</SubHeading>
        <Text>
          Direct to municipality - working with city managers to trial the
          program
        </Text>
        <Text>Launching by city</Text>
      </Slide>

      <Slide>
        <SubHeading>Team</SubHeading>
        <div className="flex gap-8">
          <img
            className="w-48 h-48 object-cover rounded-xl"
            src="https://media-exp1.licdn.com/dms/image/C5603AQFEXJ5-mjkhPA/profile-displayphoto-shrink_200_200/0/1595178999211?e=1652313600&v=beta&t=c3W4SSbe8SOtwK5rkMyKckt6egn7eyRG0VtNtHDuEI8"
          />
          <Text>
            Zen Tang - <GradientText>Technologist</GradientText>. Excited about the
            metaverse - but think it will be defined by DAOs, better online
            collaboration models, and integration of payments and identity. Will be working on clarifying the idea, talking to customers, and building the MVP.
          </Text>
        </div>
        <div className="flex gap-8">
          <img
            className="w-48 h-48 object-cover rounded-xl"
            src="https://media.istockphoto.com/photos/silhouette-of-asian-high-school-girl-picture-id1306611068?b=1&k=20&m=1306611068&s=170667a&w=0&h=ZAPXPzGTN2XEc5zhVxwPttICWx7SeRsvozyuN1StoLQ="
          />
          <Text>
            Unknown - <GradientText>Co-founder?</GradientText>
          </Text>
        </div>
      </Slide>

      <Slide>
        <SubHeading>Milestones</SubHeading>
        <Text>May - June: Talk to government customers</Text>
        <Text>June - Aug: Build MVP</Text>
      </Slide>
      {credits}
    </div>
  )
}

export default Home
