import TwoPart from "./TwoPart";
import SingleJoke from "./SingleJoke";

import { useState } from "react";

function App() {
  const [joke, setJoke] = useState({})

    function getJoke (){
      fetch("https://v2.jokeapi.dev/joke/Programming")
      .then((res)=>{
        return res.json();
      })
      .then((data)=>{
        setJoke(data);
        console.log(data);
      });
    }

      return (
    <div className="app">
      <h2 className="heading">😂 Jokes! 😂</h2>
      {joke.type === "single" ? (<SingleJoke data={joke} />
      ) : joke.type === "twopart" ? (<TwoPart data={joke} />) : null}
      

      <div className="buttons">
        <button className="another" onClick={getJoke}>Another Joke!😆</button>
      </div>
    </div>
  );
}

export default App;
