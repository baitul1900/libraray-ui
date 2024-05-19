import { useState } from "react";

const Todo = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const todoAdd = () => {
    if (item.trim() !== "") {
      // Check if item is not empty or just whitespace
      setList([...list, item]);
      setItem(""); // Clear the input field
    } else {
      alert("Please enter a task");
    }
  };

  return (
    <div>
      <table>
        <tbody>
          {list.length !== 0 ? (
            list.map((value, i) => {
              return <tr key={i}>{value}</tr>;
            })
          ) : (
            <tr>
              <td>Task list is empty</td>
            </tr>
          )}
        </tbody>
      </table>

      <input
        onChange={(e) => setItem(e.target.value)}
        // Bind the input field to the item state
        placeholder="Input here"
      />

      <button onClick={todoAdd}>Add</button>
    </div>
  );
};

export default Todo;
