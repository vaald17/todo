import './Task.css'
import deleteIcon from './icons/trash.svg'
import editIcon from './icons/edit.svg'
import saveIcon from './icons/save.svg'
import { useEffect, useState } from 'react'
import { motion } from "motion/react"



export default function Task({ task, deleteTask, editTask, index }) {
    const [newName, setNewName] = useState(task.name);
    const [isEditing, setIsEditing] = useState(false);

    const variants = {
        hidden: {
            opacity: 0,
            translateX: -500,
            transition: { duration: 0.2, delay: 0.05, ease: 'easeOut' }
        },
        visible: (index) => ({
            opacity: 1,
            scale: 1,
            translateX: 0,
            transition: { duration: 0.3, delay: index * 0.05, ease: 'easeOut' }
        })
    };

    // useEffect(() => {
    //     console.dir(`mount ${task.name}`);
    //     return () => {
    //         console.dir(`unmount ${task.name}`);
    //     }
    // }, []);

    // console.dir(task.name);

    return (
        <motion.div
            layout
            transition={{
                layout: { duration: 0.1, type: "tween" }
            }}
            variants={variants}
            custom={index}
            initial='hidden'
            animate="visible"
            exit='hidden'
            className="task"
        >
            {isEditing ? (
                <form onSubmit={(e) => {
                    e.preventDefault();
                    newName.trim() !== task.name && editTask(task.id, newName.trim());
                    setIsEditing((prev) => !prev)
                }}>
                    <input
                        value={newName}
                        onChange={e => setNewName(e.target.value)}
                        placeholder="Task name"
                        autoFocus
                    />
                    <button type="submit">
                        <div>
                            <img className='save-icon' type='submit' src={saveIcon} alt="save task" />
                        </div>
                    </button>
                </form>
            ) : <p>{task.name}</p>}
            <div className='edit-delete-buttons'>
                <img
                    className='edit-icon'
                    src={editIcon}
                    onClick={() => {
                        setIsEditing((prev) => !prev);
                        setNewName(task.name)
                    }}
                ></img>
                <img
                    className='delete-icon'
                    src={deleteIcon}
                    onClick={() => deleteTask(task.id)}
                ></img>
            </div>
        </motion.div>
    )
}