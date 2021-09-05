import { useState, useEffect } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import WordDisplay from "./WordDisplay";
import WordInput from "./WordInput";

const PlayArea = ({ dict, clearSelectDict }) => {
  const [wordArray, setWordArray] = useState(dict.words.split(","));
  const [currentWord, setCurrentWord] = useState(
    wordArray[Math.floor(Math.random() * wordArray.length)]
  );
  const [longestStreak, setLongestStreak] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);

  //Set new current word
  const setNewWord = () => {
    setCurrentWord(wordArray[Math.floor(Math.random() * wordArray.length)]);
  };

  //Request new word
  const requestNewWord = () => {
    setCurrentStreak(0);
    setNewWord();
  };

  //Handle key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (e.target.value.toLowerCase() == currentWord.toLowerCase()) {
        setCurrentStreak(currentStreak + 1);
      } else {
        setCurrentStreak(0);
      }
      e.target.value = "";
      setNewWord();
    }
  };

  useEffect(() => {
    if (currentStreak >= longestStreak) {
      setLongestStreak(currentStreak);
    }
  }, [currentStreak]);

  return (
    <div className="play-container">
      <div className="btn go-back-btn" onClick={() => clearSelectDict()}>
        <FaArrowCircleLeft /> Go Back
      </div>
      <div className="text category">
        <span>Category: </span>
        <span>{dict.name}</span>
      </div>
      <div className="stats">
        <div className="text high-streak">
          <span>Longest Streak: </span>
          <span>{longestStreak}</span>
        </div>
        <div className="text current-streak">
          <span>Current Streak: </span>
          <span>{currentStreak}</span>
        </div>
      </div>
      <div className="text current-word">{currentWord}</div>
      <input
        className="text-input"
        type="text"
        placeholder="...type here..."
        onKeyDown={handleKeyDown}
      />
      <div className="btn new-word-btn" onClick={requestNewWord}>
        Request New Word
        <span className="tooltiptext">This will reset your current streak</span>
      </div>

      {/* <WordDisplay currentWord={currentWord} />
      <WordInput setWord={setNewWord} /> */}
    </div>
  );
};

export default PlayArea;
