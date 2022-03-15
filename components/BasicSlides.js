import cx from 'classnames'

function Slide({
  children,
  classes = '',
  dark = false,
  center = false,
  left = false,
}) {
  return (
    <div
      className={cx(
        'flex min-h-screen w-full flex-1 flex-col items-center justify-center rounded bg-white px-10 py-20 md:py-32 font-medium antialiased md:px-40 space-y-8',
        classes,
        dark && 'bg-black text-white',
        center && 'items-center text-center',
        left && 'items-start'
      )}
    >
      {children}
    </div>
  )
}

function Image({ src }) {
  return (
    <div className="self-center -mx-10 md:-mx-40">
      <img className="object-cover" src={src}></img>
    </div>
  )
}

function Heading({ children }) {
  return (
    <div className="pb-4 md:pb-8 max-w-screen-md text-5xl font-medium md:text-6xl lg:text-8xl">
      {children}
    </div>
  )
}

function SubHeading({ children }) {
  return (
    <div className="md:pb-8 max-w-screen-md text-3xl md:text-5xl lg:text-6xl">
      {children}
    </div>
  )
}

function Text({ children }) {
  return (
    <div className="text-xl md:my-6 md:text-2xl lg:text-3xl">{children}</div>
  )
}

export { Slide, Heading, SubHeading, Text, Image }
