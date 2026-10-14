import { useState } from "react";

export default function App() {
  const[counter, setCounter] = useState({wert:0, kommentar: "Test"}); //default Wert 0 -> muss den richtigen Datentyp haben
  console.log("Rerender");
 
  return (
    <div className="App">
      <div>Hallo Mond</div>
      <div>{counter.kommentar}</div>
      <div>{counter.wert}</div>
      <button onClick = {() => setCounter(counter + 1)}>Drück mich +1</button>
      <button onClick = {() => setCounter(0)}>Drück mich 0</button>

      <button onClick = {() => {
        console.log(counter);
        setCounter({ ...counter, wert: counter.wert + 1});
      }}>
        Drück mich Objekt +1
      </button>
      <input
        onChange = {(e) => setCounter({ ...counter, kommentar: e.target.value})}
      />

    </div>
  );
}
