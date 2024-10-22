const List = ({ list }) => {

    
  return (
    <>
      {!list || list.length === 0 ? (
        <h2>No Student Found</h2>
      ) : (
        <h2>Here are the student</h2>
      )}
      <ul>
        {list.map((item) => (
          <li key={item}> {item}</li>
        ))}
      </ul>
    </>
  );
};

export default List;
