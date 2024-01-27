import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [quoteInfo, setQuoteInfo] = useState({});

  useEffect(() => {
    getQuote();
    setColor();
  }, []);

  const getQuote = () => {
    fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => {
      setQuoteInfo({
        text: data.content,
        author: data.author
      });
    })
    setColor();
  };

  const setColor = () => {
    const color = getColor();
    document.querySelector(".App").style.backgroundColor = color;
    document.getElementById("text").style.color = color;
    document.getElementById("author").style.color = color;
    document.getElementById("new-quote").style.backgroundColor = color;
  }

  const getColor = () => {
    let color = "#";
    const hexaArr =  ['5198a8','5165a8','7551a8','cf5353','cf9953','68b55b','5bb579','375c59'];
    color += hexaArr[Math.floor(Math.random() * hexaArr.length)];
    return color;
  }

  
  
  return (
    <div className="App">
      <div id="quote-box" style={{backgroundColor: "white"}}>
        <div id="text">{quoteInfo.text}</div>
        <div id="author">{"-" + quoteInfo.author}</div>
        <button id="new-quote" onClick={getQuote}>New Quote</button>
        <a id="tweet-quote" href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text' + quoteInfo.text}>Post to X</a>
      </div>
    </div>
  );
}

export default App;
