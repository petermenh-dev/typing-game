import Dictionary from "./Dictionary";

const Dictionaries = ({ dicts, onSelectDict }) => {
  return (
    <div>
      {dicts.map((dict) => (
        <Dictionary key={dict.id} dict={dict} onSelectDict={onSelectDict} />
      ))}
    </div>
  );
};

export default Dictionaries;
