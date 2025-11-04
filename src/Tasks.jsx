import './Tasks.css'
import { motion, AnimatePresence } from "motion/react"
import Task from './Task'

// export default function Tasks({ tasks, deleteTask, editTask }) {
//     return (
//         <div className="tasks">
//             {tasks.map((task, index) => <Task index={index} key={task.id} task={task} deleteTask={deleteTask} editTask={editTask} />)}
//         </div>
//     )
// }

export default function Tasks({ tasks, deleteTask, editTask }) {
    return (
        <div className="tasks">
            <AnimatePresence>
                {tasks.map((task, index) => <Task index={index} key={task.id} task={task} deleteTask={deleteTask} editTask={editTask} />)}
            </AnimatePresence>
        </div>
    )
}