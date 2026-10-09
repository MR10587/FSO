const AddName = ({ addName, handleNameInput, handleNumberInput}) => {
  return (
    <form onSubmit={addName}>
      <div>
        name: <input onChange={handleNameInput} />
      </div>
      <div>
        number: <input onChange={handleNumberInput} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default AddName;
