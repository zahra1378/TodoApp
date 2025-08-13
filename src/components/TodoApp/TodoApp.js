import React, { useState, useEffect } from "react";
import './TodoApp.css';
import {
    AddTaskForm,
    TaskList,
    FilterFooter
} from '../';
import { v4 as uuidv4 } from 'uuid';

const TodoApp = () => {
    const [tasks,setTasks] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [filter,setFilter] = useState('all');
    const [refresh,setRefresh] = useState(0);
    
    useEffect(()=>{
        let storedTasks = localStorage.getItem('tasks');
        if(storedTasks){
            storedTasks = JSON.parse(storedTasks);
        }else{
            storedTasks = [];
        }
        setTasks(storedTasks)
    },[]);
    useEffect(()=>{
        if(filter === 'all'){
            setFilteredTasks(tasks);
        }
        if(filter === 'completed'){
            const newCompletedFilteredTasks = tasks.filter(task => task.status)
            setFilteredTasks(newCompletedFilteredTasks);
        }
        if(filter === 'active'){
            const newActiveFilteredTasks = tasks.filter(task => !task.status)
            setFilteredTasks(newActiveFilteredTasks);
        }
    },[filter,tasks,refresh]);

    const addTask = (taskTitle)=>{
        const newTasks = [
            ...tasks,
            {
                id: uuidv4(),
                title: taskTitle,
                status: false,
            }
        ]
        setTasks(newTasks);
        localStorage.setItem('tasks',JSON.stringify(newTasks))
    }
    const deleteTask = (taskid) => {
        const newTasksList = tasks.filter(task => task.id !== taskid);
        setTasks(newTasksList);
        localStorage.setItem('tasks',JSON.stringify(newTasksList));
    };

    const handleChangeStatus=(taskid)=>{
        let newTasksList = tasks;
        const taskIndex = tasks.findIndex((task) => task.id === taskid)
        newTasksList[taskIndex].status = !newTasksList[taskIndex].status;
        setTasks(newTasksList);
        localStorage.setItem('tasks',JSON.stringify(newTasksList));
        setRefresh(refresh+1);
    }

    return(
        <div className="TodoApp">
            <AddTaskForm  addTask={addTask} />
            <TaskList tasks={filteredTasks} deleteTask={deleteTask} handleChangeStatus={handleChangeStatus} />
            <FilterFooter updateFilter={setFilter} tasks={filteredTasks} />
        </div>
    );
};

export default TodoApp;