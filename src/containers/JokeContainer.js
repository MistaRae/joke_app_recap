import Setup from '../components/Setup';
import Punchline from '../components/Punchline'
import {useState} from 'react';

const JokeContainer = () => {

  const [currentJoke, setCurrentJoke] = useState(null);

  return(
    <>
      <h1>Joke app!</h1>
      <Setup joke={currentJoke}/>
      <Punchline joke={currentJoke}/>
    </>
  )

}

export default JokeContainer;