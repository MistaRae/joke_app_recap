const Punchline = ({joke, revealPunchline}) => {

  return (
    revealPunchline ? <p>Punchline</p> : <p>Click the joke to reveal the punchline...</p>
  )

}

export default Punchline;