import React, {useState,useEffect} from 'react'

const AppuseEff = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = ` ${count} new messages`;
  }, []); //useEffect only run once when the component mounts , after refershing the component it will not run again
  return (
    <div>
      <h3>{count} new messages!</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

export default AppuseEff
