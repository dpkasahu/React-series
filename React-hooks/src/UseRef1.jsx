import React, {useRef} from 'react';


const UseRef1 = () => {
    const inputRef = useRef();
    const handleClick = () => {
        console.log(inputRef);
        inputRef.current.style.width = "200px";
        inputRef.current.focus();
    };   
  return (
    <div>
      <input type="text" ref={inputRef} />
        <button onClick={handleClick}>Click here</button>
    </div>
  )
}

export default UseRef1
