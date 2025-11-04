import './Todo.css'
import AddTask from './AddTask'
import Tasks from './Tasks'
import TasksNum from './TasksNum'
import { useState, useCallback, useEffect } from 'react'
import { nanoid } from 'nanoid'
import { useMotionValue, motion, useSpring, animate, useTransform, useMotionValueEvent } from "motion/react"
import { AnimateNumber } from "motion-plus-react"

export default function Todo() {
    const [tasks, setTasks] = useState([
        { id: nanoid(), name: 'work' },
        { id: nanoid(), name: 'sleep' },
        { id: nanoid(), name: 'walk' },
        { id: nanoid(), name: 'talk' }
    ]);

    const x = useSpring(0);
    console.dir(x);


    // console.dir('render todo');


    const addTask = useCallback((name) => {
        const id = nanoid();
        setTasks((prev) => [{ id, name }, ...prev])
    }, []);

    const deleteTask = useCallback((id) => {
        setTasks((prev) => prev.filter((item) => item.id != id))
    }, []);

    const editTask = (id, newName) => {
        setTasks((prev) => prev.map((item) => (item.id === id) ? { id, name: newName } : item))
    };

    // console.dir(tasks);
    return (
        <div className="todo">
            <AddTask addTask={addTask} />
            <TasksNum nums={tasks.length} />
            <Tasks tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
        </div>
    )
}