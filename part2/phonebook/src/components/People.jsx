const People = ({ person, filterName }) => {
  if (person.name.toLowerCase().includes(filterName)) {
    return (
      <p>
        {person.name} {person.number}
      </p>
    );
  }
};

export default People;
