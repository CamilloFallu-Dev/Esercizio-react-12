function List() {
  const color = ["giallo", "verde", "rosso", "blu"];
  const items = color.map((name) => <li>{name}</li>);
  return (
    <div>
      <ul>{items}</ul>
    </div>
  );
}

export default List;
