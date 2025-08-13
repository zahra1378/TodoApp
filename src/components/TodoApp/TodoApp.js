import React from "react";
import './TodoApp.css';
import {
    AddTaskForm,
    TaskList,
    FilterFooter
} from '../';

const TodoApp = () => {
    return(
        <div className="TodoApp">
            <AddTaskForm />
            <TaskList />
            <FilterFooter />
        </div>
    );
};

export default TodoApp;