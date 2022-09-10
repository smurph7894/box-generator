import './App.css';
import React, {useState} from "react";
import AddBox from './components/AddBox';
import DisplayBoxes from './components/DisplayBoxes';

function App() {
  const [boxes, setBoxes] = useState([]);
  // intialized into an empty array since its [] inside the useState

  const onNewBox = (boxAttributes) => {
    setBoxes([boxAttributes, ...boxes]);
  }

  return (
    <div>
      <AddBox onNewBox={onNewBox} />

      <DisplayBoxes boxes={boxes} />
    </div>
  );
};

export default App;