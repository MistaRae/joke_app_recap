import Setup from '../components/Setup';
import Punchline from '../components/Punchline'
import {useState, useEffect} from 'react';

const JokeContainer = () => {

  const [currentJoke, setCurrentJoke] = useState(null);
  const [showPunchline, setShowPunchline] = useState(false);
  const [counter, setCounter] = useState(-1);

  useEffect(() => {
    getJokeData()
  }, [])

  useEffect(() => {
    setCounter(counter + 1)
  }, [currentJoke]);

  const getJokeData = () => {
    fetch("https://official-joke-api.appspot.com/jokes/general/random")
      .then(response => response.json())
      .then(data => setCurrentJoke(data[0]))
  }

  const handleJokeClick = () => {
    setShowPunchline(true);
  }

  return(
    <>
      <h1>Joke app!</h1>
      <Setup 
        joke={currentJoke}
        onJokeClick={handleJokeClick}
      />
      <Punchline 
        joke={currentJoke} 
        revealPunchline={showPunchline}
      />
      <button onClick={getJokeData}>Get Another</button>
      <p>Jokes seen: {counter}</p>
    </>
  )

}

export default JokeContainer;