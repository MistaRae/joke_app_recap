const Punchline = ({joke, revealPunchline}) => {

  return (
    revealPunchline ? 
    <p>{joke.punchline}</p> : 
    <p>Click the joke to reveal the punchline...</p>
  )

}

export default Punchline;