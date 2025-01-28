import React, { useState } from "react";

function TaskItem({ task, onDelete, onEdit }) {
  const [taskTitle, setTaskTitle] = useState(task.title);
  if (task.isediting) {
  return (
    <div className="task-item">
      <input
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      добавлено {task.date}
      <button onClick={() => onEdit(task.id)}>Сохранить</button>
    </div>
  );
}

    return (
      <div className="task-item">
        <h2>{taskTitle}</h2>
        добавлено {task.date}
        <button onClick={() => onEdit(task.id)}>Редактировать</button>
        <button onClick={() => onDelete(task.id)}>Удалить</button>            
      </div>
    );
  }
   

export default TaskItem;
