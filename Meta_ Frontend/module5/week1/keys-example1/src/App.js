import { useState } from 'react';
import './App.css';

const Todo = (props) => (
  <tr>
    <td>
      <label>{props.id}</label>
    </td>
    <td>
      <input />
    </td>
    <td>
      <label>{props.createdAt}</label>
    </td>
  </tr>
);

function App() {
  const [todos, setTodos] = useState([
    {
      id: 'todo1',
      createdAt: '19:00',
    },
    {
      id: 'todo2',
      createdAt: '20:30',
    },
  ]);

  const reverseOrderedArray = () => {
    setTodos([...todos].reverse());
  };

  return (
    <div className="app">
      <button onClick={reverseOrderedArray}>Reverse</button>
      <table>
        <tbody>
          {todos.map((todo, index) => (
            <Todo key={index} id={todo.id} createdAt={todo.createdAt} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
