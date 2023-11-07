import './App.css';
import List from "./List";
import { useState } from 'react';

function App() {
  const [listName, setListname]  = useState("こんにちは");
  console.log(listName);
  
  return (
    <div className="App">
      <List name={listName}/>
    </div>
  );
}

export default App;
