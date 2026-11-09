import { useState } from "react";

// Build Calculator UI by self
const Calculator = () => {
  const [OutputSection, setOutputSection] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        // Evaluate safely
        setOutputSection(
          eval(OutputSection.replace("×", "*").replace("÷", "/")).toString(),
        );
      } catch (error) {
        setOutputSection("Error");
      }
    } else {
      setOutputSection(value);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1>Welcome to Apna Calculator</h1>
      {/* Calculator UI */}

      <div className="bg-[#005d77] w-79 rounded-lg p-1 flex flex-col ">
        {/* Output Section */}
        <div className="h-24 flex items-end justify-end p-2">
          <p className="text-2xl">{OutputSection}</p>
        </div>

        {/* Input Section */}
        <div className="bg-[#00464db5] rounded-t-lg">
          <div className="flex justify-between items-center m-2">
            <button
              onClick={() => handleClick(" ")}
              className="bg-blue-500 text-[19px] w-11 h-11 m-2 p-2 rounded-lg cursor-pointer hover:bg-blue-400">
              AC
            </button>
            <button
              onClick={() => handleClick(OutputSection.slice(0, -1))}
              className="bg-blue-500 text-[19px] w-11 h-11 m-2 p-2 rounded-lg cursor-pointer hover:bg-blue-400">
              C
            </button>
            <button
              onClick={() => handleClick(OutputSection + "%")}
              className="bg-blue-500 text-[19px] w-11 h-11 m-2 p-2 rounded-lg cursor-pointer hover:bg-blue-400">
              %
            </button>
            <button
              onClick={() => handleClick(OutputSection + "/")}
              className="bg-blue-500 text-[19px] w-11 h-11 m-2 p-2 rounded-lg cursor-pointer hover:bg-blue-400">
              /
            </button>
          </div>

          {/* section two */}

          <div className="flex justify-between items-center m-2">
            <button
              onClick={() => handleClick(OutputSection + 7)}
              className="bg-blue-500 text-[19px] w-11 h-11 m-2 p-2 rounded-lg cursor-pointer hover:bg-blue-400">
              7
            </button>
            <button
              onClick={() => handleClick(OutputSection + 8)}
              className="bg-blue-500 text-[19px] w-11 h-11 m-2 p-2 rounded-lg cursor-pointer hover:bg-blue-400">
              8
            </button>
            <button
              onClick={() => handleClick(OutputSection + 9)}
              className="bg-blue-500 text-[19px] w-11 h-11 m-2 p-2 rounded-lg cursor-pointer hover:bg-blue-400">
              9
            </button>
            <button
              onClick={() => handleClick(OutputSection + "×")}
              className="bg-blue-500 text-[19px] w-11 h-11 m-2 p-2 rounded-lg cursor-pointer hover:bg-blue-400">
              X
            </button>
          </div>

          {/* section three */}
          <div className="flex justify-between items-center m-2">
            <button
              onClick={() => handleClick(OutputSection + "4")}
              className="bg-blue-500 text-[19px] w-11 h-11 m-2 p-2 rounded-lg cursor-pointer hover:bg-blue-400">
              4
            </button>
            <button
              onClick={() => handleClick(OutputSection + "5")}
              className="bg-blue-500 text-[19px] w-11 h-11 m-2 p-2 rounded-lg cursor-pointer hover:bg-blue-400">
              5
            </button>
            <button
              onClick={() => handleClick(OutputSection + "6")}
              className="bg-blue-500 text-[19px] w-11 h-11 m-2 p-2 rounded-lg cursor-pointer hover:bg-blue-400">
              6
            </button>
            <button
              onClick={() => handleClick(OutputSection + "-")}
              className="bg-blue-500 text-[19px] w-11 h-11 m-2 p-2 rounded-lg cursor-pointer hover:bg-blue-400">
              -
            </button>
          </div>

          {/* section four */}
          <div className="flex justify-between items-center m-2">
            <button
              onClick={() => handleClick(OutputSection + "1")}
              className="bg-blue-500 text-[19px] w-11 h-11 m-2 p-2 rounded-lg cursor-pointer hover:bg-blue-400">
              1
            </button>
            <button
              onClick={() => handleClick(OutputSection + "2")}
              className="bg-blue-500 text-[19px] w-11 h-11 m-2 p-2 rounded-lg cursor-pointer hover:bg-blue-400">
              2
            </button>
            <button
              onClick={() => handleClick(OutputSection + "3")}
              className="bg-blue-500 text-[19px] w-11 h-11 m-2 p-2 rounded-lg cursor-pointer hover:bg-blue-400">
              3
            </button>
            <button
              onClick={() => handleClick(OutputSection + "+")}
              className="bg-blue-500 text-[19px] w-11 h-11 m-2 p-2 rounded-lg cursor-pointer hover:bg-blue-400">
              +
            </button>
          </div>

          {/* section five */}
          <div className="flex justify-between items-center m-2">
            <button
              onClick={() => handleClick(OutputSection + "00")}
              className="bg-blue-500 text-[19px] w-11 h-11 m-2 p-2 rounded-lg cursor-pointer hover:bg-blue-400">
              00
            </button>
            <button
              onClick={() => handleClick(OutputSection + "0")}
              className="bg-blue-500 text-[19px] w-11 h-11 m-2 p-2 rounded-lg cursor-pointer hover:bg-blue-400">
              0
            </button>
            <button
              onClick={() => handleClick(OutputSection + ".")}
              className="bg-blue-500 text-[19px] w-11 h-11 m-2 p-2 rounded-lg cursor-pointer hover:bg-blue-400">
              .
            </button>
            <button
              onClick={() => handleClick("=")}
              className="bg-blue-500 text-[19px] w-11 h-11 m-2 p-2 rounded-lg cursor-pointer hover:bg-blue-400">
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
