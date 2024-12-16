// src/Terminal.js

import { useState, useEffect } from "react";
import "./Tbento.css";

const commands = {
  // help: "List all available commands",
  // clear: "Clear the terminal",
  // echo: "Repeat back the input",
  // date: "Show current date and time",
  // exit: "Exit the terminal",
  user_info: "Show user information.",
  cd_dir:"use cd to navigate webpages like home ,about ,projects.",
  // reverse: "Reverse the text provided",
  calc: "Perform basic calculations, e.g., calc 5 + 3",
  // random: "Generate a random number",
  // greet: "Greet with a name",
  // weather: "Simulate a weather info command",
};

function Tbento() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(null);
  const [showHelpMessage, setShowHelpMessage] = useState(true);

  const handleCommand = () => {
    let result;
    const trimmedInput = input.trim().toLowerCase();
    const args = trimmedInput.split(" ");

    switch (args[0]) {
      case "help":
        result = Object.keys(commands).map(
          (cmd) => `${cmd} - ${commands[cmd]}\n`
        );
        break;
      case "user_info":
        result =
          "Hello, my name is Prabhat Bhasme, and I’m thrilled to be here today. I’m a passionate developer with a solid background in both frontend and backend technologies, specializing in ReactJS and FastAPI. In addition to my web development skills, I’m actively involved in AI and IoT projects";
        break;
      case "date":
        result = new Date().toString();
        break;
      case "random":
        result = Math.floor(Math.random() * 100).toString();
        break;
      case "clear":
        setOutput([]);
        setInput("");
        return;
      case "greet":
        result = `Hello, ${args[1] || "stranger"}!`;
        break;
      case "echo":
        result = `${args[1]}!`;
        break;
      case "reverse":
        result = args.slice(1).join(" ").split("").reverse().join("");
        break;
      case "uppercase":
        result = args.slice(1).join(" ").toUpperCase();
        break;
      case "lowercase":
        result = args.slice(1).join(" ").toLowerCase();
        break;
      case "calc":
        try {
          // Basic calculator for addition, subtraction, multiplication, division
          const num1 = parseFloat(args[1]);
          const operator = args[2];
          const num2 = parseFloat(args[3]);
          switch (operator) {
            case "+":
              result = (num1 + num2).toString();
              break;
            case "-":
              result = (num1 - num2).toString();
              break;
            case "*":
              result = (num1 * num2).toString();
              break;
            case "/":
              result =
                num2 !== 0 ? (num1 / num2).toString() : "Cannot divide by zero";
              break;
            default:
              result = "Invalid operation!";
          }
        } catch (error) {
          result = "Invalid calculation!";
        }
        break;
      case "weather": {
        const locations = ["Sunny", "Cloudy", "Rainy", "Stormy", "Snowy"];
        result = `The weather is ${
          locations[Math.floor(Math.random() * locations.length)]
        }.`;
        break;
      }
      case "factorial": {
        const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
        const num = parseInt(args[1], 10);
        if (isNaN(num)) {
          result = "Please provide a valid number for factorial calculation.";
        } else {
          result = `Factorial of ${num} is ${factorial(num)}.`;
        }
        break;
      }
      default:
        result = `Command not found: ${input}`;
    }

    const newOutput = [...output, `> ${input}`, result];
    setOutput(newOutput);
    setInput("");
    setDisplayedText("");
    setCurrentLineIndex(newOutput.length - 1);
    setIsTyping(true);
  };

  useEffect(() => {
    if (isTyping && currentLineIndex !== null) {
      const line = output[currentLineIndex];
      let charIndex = 0;

      const typingInterval = setInterval(() => {
        setDisplayedText(line.slice(0, charIndex));
        charIndex++;
        if (charIndex > line.length) {
          clearInterval(typingInterval);
          setIsTyping(false);
          setCurrentLineIndex(null);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    }
  }, [isTyping, output, currentLineIndex]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand();
      setShowHelpMessage(false);
    }
  };

  return (
    <div className="terminal">
      <div className="terminal-output">
        {output.map((line, index) => (
          <div
            key={index}
            className={
              isTyping && index === currentLineIndex
                ? "typing"
                : "terminal-line"
            }
          >
            {line}
          </div>
        ))}
        {isTyping && <div>{displayedText}</div>}
      </div>
      {showHelpMessage && (
        <span>
          Type &quot;help&quot; so you know what you are capable of &lt;3
        </span>
      )}
      <div className="terminal-input-container">
        <pre className="caret-bar">
          $ Welcome user <span></span>
        </pre>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="terminal-input"
          // autoFocus
        />
      </div>
    </div>
  );
}

export default Tbento;
