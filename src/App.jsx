import { useState } from "react";

import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemAmount, setItemAmount] = useState("");

  const add = () => {
    if (itemName && itemAmount) {
      const newItem = { 
        name: itemName, 
        amount: parseInt(itemAmount) 
      };
      setItems([...items, newItem]);
      setItemName("");
      setItemAmount("");
    }
  };

  const remove = () => {
    setItems(items.slice(0, -1));
    
  };

  const totalAmount = items.reduce((acc, item) => acc + item.amount, 0);

  return (
    <>
      <div className="h-[65vh] md:h-[67vh] md:w-[26vw] border-[2px] bg-blue-800 md:mx-[25rem] rounded-lg my-20">
        <h1 className="text-4xl text-white  p-2 font-medium">
          EXPENSE TRACKER
        </h1>
        <div className=" md:h-[52vh] md:w-[23vw] mx-4 p-2">
          <label className="flex text-xl font-medium">Item Name:</label>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className="w-full p-2 rounded"
          ></input>

          <label className="flex text-xl font-medium">Item Amount:</label>
          <input
            type="text"
            value={itemAmount}
            onChange={(e) => setItemAmount(e.target.value)}
            className="w-full p-2 rounded"
          ></input>

          <div className="flex gap-4">
            <button onClick={add} className="h-[7vh] w-[13vh] bg-blue-300 rounded-lg text-lg font-medium my-4">
              Add
            </button>
            <button onClick={remove} className="h-[7vh] w-[13vh] bg-blue-300 rounded-lg text-lg font-medium my-4">
              Remove
            </button>
          </div>

          <div className=" flex justify-between content-center md:h-[15vh] md:w-[22vw] py-4 ">
            <div className="md:h-[8vh] md:w-[8vw] content-center text-center">
              <h1 className="h-100% w-full bg-gray-300 rounded-lg text-lg font-medium ">
                Item List
                <ul>
                {items.map((item, index) => (
                  <li key={index}>
                    {item.name}: {item.amount}
                  </li>
                ))}
              </ul>
              </h1>
              
            </div>
            <h1 className="h-[8vh] w-[11vw] bg-[#ffffffee] rounded-lg text-lg font-medium ">
              Total:{totalAmount}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
