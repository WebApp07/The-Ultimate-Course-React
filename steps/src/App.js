import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}

function Steps() {
  //const step = 1;

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  //console.log(step, setStep);

  function handlerPrevious() {
    //alert("Previous!");
    if (step > 1) setStep((s) => s - 1);
  }

  function handlerNext() {
    //alert("Next!");
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}{" "}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7960f2", color: "#fff" }}
              onClick={() => handlerPrevious()}
              //onMouseEnter={() => alert("TEST")}
            >
              Previuos
            </button>
            <button
              style={{ backgroundColor: "#7960f2", color: "#fff" }}
              onClick={() => handlerNext()}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
