import React,{useState, useRef, useEffect} from 'react';
//craeting variable which will not re-render the component
//useRef is used to persist the value of a variable across renders without causing re-renders
const UseRef = () => {
    const[name,setname]=useState("");
    // const[count,setCount]=useState(0);
    const count=useRef(0);
    useEffect(() => {
        count.current = count.current + 1;
    });
    console.log(count);
    
  return (
    <div>
      <input type="text" onChange={(e)=> setname(e.target.value)} />
      <h2>Name: {name}</h2>
      <h2>Renders : {count.current}</h2>
    </div>
  )
}

export default UseRef;
