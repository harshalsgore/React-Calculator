// File imports for the calculator application
import { evaluate } from "mathjs";
import Navbar from "./Navbar"; // importing Navbar component
import "../styles/calc.css"; // importing styles for the calculator
import Buttons from "./Button"; // importing Buttons component
import { useState } from "react"; // importing React hook for state management
import Result from "./Result"; // importing Result component

// Main App component
function App() {
  // Using useState hook to maintain the state for result
  const [result, setresult] = useState("0");

  // Function to handle button click events
  const handleclicks = (value) => {
    switch (value) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case ".":
      case "+":
      case "-":
      case "/":
      case "*":
        // If result is "0", replace it with the clicked value, otherwise append it to the result
        if (result === "0") {
          setresult(value);
        } else {
          setresult(result + value);
        }
        break;
      case "=":
        try {
          // Use the evaluate function from mathjs to safely evaluate the expression
          const evaluatedResult = evaluate(result);
          setresult(evaluatedResult.toString());
        } catch (error) {
          setresult("Error");
        }
        break;
      case "c":
        // Clear the result state
        setresult("");
        break;
      case "+/-":
        // Change the sign of the result
        setresult(parseInt(result, 10) * -1);
        break;
      case "%":
        // Convert the result to a percentage
        setresult(parseFloat(result, 10) / 100);
        break;
      default:
        break;
    }
  };

  // Render the Navbar, Result, and Buttons components
  return (
    <div>
      <Navbar />
      <div className="myCalculator">
        <Result result={result} />
        <Buttons Buttonclicked={handleclicks} />
      </div>
    </div>
  );
}

// Export the App component as default
export default App;
