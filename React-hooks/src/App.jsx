import React,{useState} from 'react'

const  App= () =>  {
  // const array = useState(0);
  // const counter = array[0];
  // const setCounter = array[1];
  const [details, setDetails] = useState({counter: 0, name: ""});
  function increaseCounter() {
    setDetails((prevState) => {
      return {...prevState, counter: prevState.counter + 1}
    });
  }
  return (
    <div>
      <input type="text" onChange={(e) => e.target.value}/>
      <h1>{details.name} has clicked {details.counter} times! </h1>
      <button onClick={increaseCounter}>increase</button>
    </div>
  )
}

export default App
