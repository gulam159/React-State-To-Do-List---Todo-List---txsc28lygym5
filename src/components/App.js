import React, { useState } from "react";
import "./../styles/App.css";

function App(){
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState("");
  
    function getInput(e) {
    setInput(e.target.value);
  }

  function addData() {
   if(!input || /^\s*$/.test(input)) {
      return;
    } else if(input) {
      if (selectedData) {
        const copyData = [...data];
        const index = copyData.findIndex((item) => item.id == selectedData.id);
        copyData[index] = { ...copyData[index], title: input };
        setData(copyData);
        setSelectedData("");
      } else {
        setData([...data, { id: data.length, title: input }]);
      }
      setInput("");
    }
  }
  function DeletData(id) {
    const filteredItems = data.filter((item) => item.id != id);
    setData(filteredItems);
  }

  function EditData(item) {
	  if (!item && /^\s*$/.test(item)) {
      return;
    }
    setSelectedData(item);
    setInput(item.title);
  }

	return (
	<div id="main">
	<textarea id="task" value={input} onChange={getInput} cols="20" rows="1"></textarea>
	<button id="btn" onClick={addData}>Add</button>
	<ul>
        {data.map((item) => (
        <div key={item.id}>
            <li className="list">{item.title}</li>
		<button className="delete" onClick={() => DeletData(item.id)}>Delete</button>
            	<button className="edit" onClick={() => EditData(item)}>Edit</button>
	</div>
        ))}
      </ul>
	</div>
	);
}


export default App;
