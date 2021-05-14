import Setup from '../components/Setup';
import Punchline from '../components/Punchline'
import {useState, useEffect} from 'react';

const JokeContainer = () => {

  const [currentJoke, setCurrentJoke] = useState(null);
  const [showPunchline, setShowPunchline] = useState(false);

  useEffect(() => {
    getJokeData()
  }, [])

  const getJokeData = () => {
    fetch("https://official-joke-api.appspot.com/jokes/general/random")
      .then(response => response.json())
      .then(data => setCurrentJoke(data[0]))
  }

  return(
    <>
      <h1>Joke app!</h1>
      <Setup joke={currentJoke}/>
      <Punchline 
        joke={currentJoke} 
        revealPunchline={showPunchline}
      />
    </>
  )

}

export default JokeContainer;