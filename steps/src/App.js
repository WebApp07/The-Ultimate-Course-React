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
    </div>
  );
}

function Steps() {
  //const step = 1;

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  //console.log(step, setStep);

  function handlePrevious() {
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
          <StepMessaage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button
                bgColor="#e7e7e7e"
                textColor="#333"
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
              >
                Learn how
              </Button>
            </div>
          </StepMessaage>

          <div className="buttons">
            <Button bgColor="#7960f2" textColor="#fff" onClick={handlePrevious}>
              <span>🖕</span> Previous
            </Button>
            <Button bgColor="#7960f2" textColor="#fff" onClick={handlerNext}>
              Next <span>🖕🏻</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessaage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
