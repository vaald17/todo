import './AddTask.css'
import addIcon from './icons/add.svg'
import { useState } from 'react'

export default function AddTask({ addTask }) {
    const [name, setName] = useState('');
    return (
        <div className='add-task'>
            <form onSubmit={(e) => {
                e.preventDefault();
                if (!name) return;
                addTask(name);
                setName('')
            }}>
                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Task name"
                    autoFocus
                />
                <button type="submit">
                    <img className='add-icon' type='submit' src={addIcon} alt="add task" />
                </button>

            </form>
        </div>
    )
}