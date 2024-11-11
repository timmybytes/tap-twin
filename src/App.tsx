import tw from 'twin.macro'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
}

const App = () => (
  <div css={styles.container({ hasBackground: true })}>
    <div tw="flex flex-col justify-center items-center h-full gap-y-5">
      <h1 tw="text-6xl">Tap Trivia</h1>
      <h2>Coming Soon...</h2>
    </div>
  </div>
)

export default App
