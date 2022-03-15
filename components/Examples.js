export const Slide1 = (
  <Slide>
    <Heading>
      All-screen <GradientText>design</GradientText>. Beauty all around.
    </Heading>
    <Text>
      iPad Air lets you immerse yourself in whatever you’re reading, watching,
      or creating. The{' '}
      <GradientText>10.9-inch Liquid Retina display</GradientText> features
      advanced technologies like True Tone, P3 wide color, and an antireflective
      coating
    </Text>
    <Text>
      <GradientText>Touch ID</GradientText> is built into the top button, so you
      can use your fingerprint to unlock your iPad, sign in to apps, and make
      payments securely with Apple Pay. And iPad Air comes in{' '}
      <GradientText>five gorgeous colors</GradientText>.
    </Text>
  </Slide>
)

export const Slide2 = (
  <Slide dark left>
    <Heading>
      Fun at the <br /> speed of <GradientText>M1.</GradientText>
    </Heading>
    <Image
      src={
        'https://www.apple.com/v/ipad-air/q/images/overview/chip/m1__fp6vvi5agma2_small_2x.jpg'
      }
    />
    <SubHeading>Blazing fast 5G</SubHeading>
    <SubHeading>
      Supercharged by the <br />
      Apple M1 chip.
    </SubHeading>
    <SubHeading>12MP Ultra Wide front camera with Center Stage.</SubHeading>

    <div className="max-w-screen-sm">
      <Text>
        The breakthrough <GradientText>M1 chip</GradientText> is now in iPad
        Air. An 8-core CPU delivers up to{' '}
        <GradientText>60 percent faster performance</GradientText> than the
        previous generation, making iPad Air a creative and mobile gaming
        powerhouse. Multitask smoothly between powerful apps and play
        graphics-intensive games. And with M1, you can go even further with your
        creativity with apps like SketchUp.
      </Text>
    </div>
    <Image src="https://www.apple.com/v/ipad-air/q/images/overview/chip/cpu__7e0amf52uqaa_small_2x.jpg" />
  </Slide>
)
