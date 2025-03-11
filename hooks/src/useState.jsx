import { useState } from "react";
import ReactDOM from "react-dom/client";

function FavoriteColor() {
  // // const [color, setColor] = useState("red");
  // const [brand, setBrand] = useState("Ford");
  // const [model, setModel] = useState("Mustang");
  // const [year, setYear] = useState("1964");
  // const [color, setColor] = useState("red");
  // .........updated example........
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });
  const updateColor=() =>{
    setCar((prevCar)=>{
      return {...prevCar, color:"blue"}
    }); //prevCar is the previous state of car
    // setCar({...car, color:"blue"}); //this is also correct
  }


  return(
    <>
    {/* <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p>
      <button type="button" onClick={() => setBrand("Chevy")}>
        Change Brand

      </button> */}

      {/* ..................new example............... */}
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button 
      type="button" onClick={updateColor}>Blue</button>
     


    </>
  )
   

}
export default FavoriteColor;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<FavoriteColor />);

              