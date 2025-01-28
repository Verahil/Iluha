import React, { useState } from 'react';
import TaskItem from './components/TaskItem';

function App() {
  const [tasks, setTasks] = useState([{ id: 1, title: 'Залупа', date: new Date().toLocaleString() , isediting: false}]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  
  const Ohuet = "Ну нихуя ж себе! Илюша засылай некст таску";
  const addTask = () => {  
    const newTask = {
      id: Date.now(),
      title: newTaskTitle,
      date: new Date().toLocaleString()
    };
    setTasks(prev => [...prev, newTask]);
    setNewTaskTitle(''); //Чистка инпута
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id)); //Удаляет задачу по id
  };
  const editTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, isediting: !task.isediting, date: new Date().toLocaleString()} : task));
  }

  return (
    <div className="App">
      <input 
        placeholder='Новая задача'
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
      />
      <button onClick={addTask}>Создать</button>
      {tasks.map(task => (
        <TaskItem 
          task={task}
          onDelete={id => deleteTask(id)} // Передаю функцию удаления
          onEdit={id => editTask(id)} // Передаю фунцию редактирования
        />
      ))}
    </div>
  );
}

export default App;
