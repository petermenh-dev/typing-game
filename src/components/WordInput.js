const WordInput = ({ setWord }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("enter pushed");
    }
  };

  return (
    <div>
      <input type="text" placeholder="Type Here" onKeyDown={handleKeyDown} />
      <button onClick={setWord}>set word</button>
    </div>
  );
};

export default WordInput;
