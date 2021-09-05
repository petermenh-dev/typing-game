const Dictionary = ({ dict, onSelectDict }) => {
  const dictSelected = () => {
    console.log(dict.name);
  };

  return (
    <div className='dictionary-item'>
      <h2 onClick={() => onSelectDict(dict.id)}>{dict.name}</h2>
    </div>
  );
};

export default Dictionary;
