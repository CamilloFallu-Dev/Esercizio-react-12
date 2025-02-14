//1 - Stato per memorizzare la lista dei todo
//1 - Stato per memorizzare il valore dell'input

//2 -  Gestore per aggiungere un nuovo todo
// setTodos([...todos, inputValue]); Aggiungi il nuovo todo alla lista
// setInputValue(""); Pulisci il campo di input dopo aver aggiunto il todo
import { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);

      setInputValue("");
    }
  };
  // rimuovere tutti i todo (non sono riuscito)
  const handleRemoveTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  //resettare la lista dei todo
  const handleResetTodos = () => {
    setTodos([]);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Aggiorna il valore dell'input
        placeholder="Aggiungi un nuovo todo"
      />

      <button onClick={handleAddTodo}>Aggiungi Todo</button>
      <button onClick={handleResetTodos}>Resetta</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}

            <button onClick={() => handleRemoveTodo(index)}>Rimuovi</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
// Scorriamo ogni elemento dell'array todos
// Ogni todo viene renderizzato come un elemento <li>
