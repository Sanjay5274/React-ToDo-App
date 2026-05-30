import { useState } from 'react'
// import Todo from './Todo.jsx'
function App() {
  const [task, setTask] = useState(['Woke up early', 'Take Protin', 'Do Gym']);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTask([...task, input]);
    setInput("");
  }
  const deleteTask = (index) => {
    setTask(task.filter((_, i) => i !== index));
  };

  return (
    <>
      <div>
        <h2 className='text-center'>My To-Do List</h2>
        <div className='d-flex justify-content-center'>
          <input
            className='form-control w-25'
            type="text"
            placeholder='Enter Task'
            onChange={(data) => setInput(data.target.value)}
          />
          <button className=' btn btn-primary' onClick={addTask}>Add Task</button>
        </div>
        <div className="card w-50 mx-auto shadow">
          <ul className="list-group list-group-flush">
            {task.map((task, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between"
              >
                {task}
                <span
                  className="text-danger"
                  style={{ cursor: "pointer" }}
                  onClick={() => deleteTask(index)}
                >
                  &times;
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
export default App;