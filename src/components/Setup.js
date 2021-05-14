const Setup = ({joke, onJokeClick}) => {

  return (
    joke ? 
      <h3 onClick={onJokeClick}>{joke.setup}</h3> : 
      <p>loading...</p>
  )

}

export default Setup;