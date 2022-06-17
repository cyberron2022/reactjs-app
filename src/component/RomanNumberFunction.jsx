import React from "react";
import { useState } from "react";
import { convertToRoman } from "./romans";

function RomanNumberFunction() {

  const [input, setInput] = useState("");
  const [result, setResult] = useState("")
  const [resultSpanError, setResultSpanError] = useState('')

  function convertNow() {

    if (input === '') {
        setResultSpanError("Empty value is not accepted")
    } else if (parseInt(input) > 4000) {
        setResultSpanError("Value must be less than 4000")
    } else {
      let result = convertToRoman(input);
      setResult(result)
    }
    
  }

  function clearInput() {
    setResultSpanError("");
    setResult("0")
  }

  const handleChange = (event) => {
    const result = event.target.value.replace(/\D/g, "");
    setResultSpanError("");
    setInput(result);
  };

  return (
    <div className="">
     
       

        <div className="my-10 pl-4 pr-4 pt-6 pb-6 mx-auto shadow-md bg-gray-100 w-full max-w-lg rounded-md">
          <div className="flex  mb-6">
              <div className="w-full px-3  text-center">
                 <label className="text-lg  font-bold">CONVERTER TO ROMAN NUMBER</label>
              </div>
            
          </div>
          
          
          <div className="flex flex-wrap mb-6">
            <div className="w-full px-3 ">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                
              >
                Input Number
              </label>
              <input
                className= {resultSpanError ?  "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white": "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"}
                id="inputField"
                maxLength={4}
                placeholder="1-3999"
                value={input}
                onInput={(e) => setInput(e.target.value)}
                onChange={handleChange}
                autoComplete="off" 
              />
              <p className="mt-5 text-red-500 text-xs italic">
                <span >{resultSpanError && resultSpanError }</span>
              </p>
            </div>
            
          </div>
          <div className="flex  mb-6">
            <div className="w-full px-3  ">
                <button
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                    id="convertBtn"
                    onClick={()=> {
                        convertNow()
                    }}
                >
                    Convert
                </button>
            </div>

            <div className="w-full px-3 ">
                <button
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                    onClick={clearInput}
                >
                    Clear
                </button>
            </div>


          </div>
          <div className="flex flex-wrap  mb-6">
            <div className="w-full px-3 ">
                   
            <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Result
              </label>

              <span 
              className="appearance-none  block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              {result ? result : '0'}
              </span>
               
                
            </div>
           
          </div>
        </div>

    
    </div>
  );
}

export default RomanNumberFunction;
