import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dictionaries from "./components/Dictionaries";
import PlayArea from "./components/PlayArea";

const App = () => {
  const [dicts, setDicts] = useState([]);
  const [selectedDict, setSelectedDict] = useState({});

  useEffect(() => {
    const getDicts = async () => {
      const dictsFromServer = await fetchDicts();
      setDicts(dictsFromServer);
    };

    getDicts();
  }, []);

  //Fetch dicts
  const fetchDicts = async () => {
    const res = await fetch("http://localhost:5000/dicts");
    const data = await res.json();

    return data;
  };

  //Fetch dictionary
  const fetchDict = async (id) => {
    const res = await fetch(`http://localhost:5000/dicts/${id}`);
    const data = await res.json();

    return data;
  };

  //Select dictionary to play
  const selectDict = (id) => {
    setSelectedDict(dicts.filter((dict) => dict.id === id)[0]);
  };

  //Clear selected dictionary
  const clearSelectDict = () => {
    setSelectedDict({});
  };

  return (
    <div className="App">
      <div className="background-scrim"></div>
      {dicts.length > 0 && Object.keys(selectedDict).length == 0 && (
        <div className="dictionary-lists">
          <h1>Choose a Category</h1>
          <Dictionaries dicts={dicts} onSelectDict={selectDict} />
        </div>
      )}
      {Object.keys(selectedDict).length > 0 && (
        <PlayArea dict={selectedDict} clearSelectDict={clearSelectDict} />
      )}
    </div>
  );
};

export default App;
