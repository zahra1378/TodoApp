import React from "react";
import './TaskList.css';
import {
    TaskItem
} from '../';

const TaskList = () => {
    return(
        <div className="TaskList">
            <ul>
                <TaskItem />
                <TaskItem />
                <TaskItem />
            </ul>
        </div>
    );
};

export default TaskList;