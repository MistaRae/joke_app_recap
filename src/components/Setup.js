const Setup = ({joke}) => {

  return (
    joke ? <h3>{joke.setup}</h3> : <p>loading...</p>
  )

}

export default Setup;