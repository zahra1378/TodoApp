import React from "react";
import './TaskItem.css';
import { FaTrashAlt } from "react-icons/fa";

const TaskItem = ({task, deleteTask, handleChangeStatus}) => {
    return(
        <li className="TaskItem">
            <input type="checkbox" id="Task" checked={task.status} onChange={() => handleChangeStatus(task.id)} />
            <h2>{task.title}</h2>
            <button onClick={() => {deleteTask(task.id)} }><FaTrashAlt /></button>
        </li>
    );
};

export default TaskItem;