Ways to fetch API data for your React project (With Code Examples)

A web API is a medium that fetches data from a database and injects it to your application. The most popular API used in web applications is the RESTful API. APIs use HTTPS request methods to interface data into your app. They're like the "key words" or protocola that access the database and return the data from the server. There are 4 common methods used by HTTP requests:
POST - sends data to an endpoint
GET - requests data from an endpoint
DELETE - deletes data from an endpoint
PUT - updates values at an endpoint

- There are plenty of ways to render data to the UI whenever you're using APIs. They inlcude:

## Using the Fetch API

``` Javascript
import "./App.css";
import Divider from "./assets/images/pattern-divider-desktop.svg";
import button from "./assets/images/icon-dice.svg";


function App() {
  const adviceNumber = document.getElementById("advice-number");
  const adviceText = document.getElementById("advice-text");


  function showAdvice () {
    fetch ("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then((data) =>data.slip)
    .then((data) => {
      adviceNumber.textContent = data.id;
      adviceText.textContent = data.advice;

    })
    .catch((error) => {
      alert(`Error ${error}`);
    })
  }

  return (
    <>
      <div className="wrapper">
        <h3 id="advice-number">Advice #117</h3>
        <p id="advice-text">
          {`"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."`}
        </p>
        <img className="divider" src={Divider} alt="" />
      </div>
      <div className="button-container">
        <button onClick={showAdvice} id="button">
          <img className="advice-button" src={button} alt="" />
        </button>
      </div>
    </>
  );
}

export default App;
```



## Using the fetch API and the UseEffect Hook

```JavaScript
import "./App.css";
import Divider from "./assets/images/pattern-divider-desktop.svg";
import button from "./assets/images/icon-dice.svg";
import { useEffect, useState } from "react";


function App() {
  const [advice, setAdvice] = useState([])
  
  const fetchData = async ()  => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()

    console.log(data)
    setAdvice(data.slip)
  }

  useEffect(() => {
    fetchData
  }, [])
 
  return (
    <>
      <div className="wrapper">
        <h3 id="advice-number">Advice #{advice.id}</h3>
        <p id="advice-text">
          {advice.advice}
        </p>
        <img className="divider" src={Divider} alt="" />
      </div>
      <div className="button-container">
        <button onClick={fetchData} id="button">
          <img className="advice-button" src={button} alt="" />
        </button>
      </div>
    </>
  );
}

export default App;
```


## Using Custom Hooks