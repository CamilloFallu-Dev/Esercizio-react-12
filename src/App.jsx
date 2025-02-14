import Colors from "./Component/Colors";
// import List from "./Component/List";
import Todo from "./Component/Todo";

const colorList = [
  { id: 1, name: "Red" },
  { id: 2, name: "Green" },
  { id: 3, name: "Black" },
];

function App() {
  return (
    <>
      {/* <List /> */}
      <Todo />
      <Colors colors={colorList} />
    </>
  );
}

export default App;
