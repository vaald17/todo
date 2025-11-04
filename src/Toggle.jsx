import { useEffect, useState } from 'react';
import './Toggle.css'
export default function Toggle() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });

    useEffect(() => {
        document.documentElement.dataset.theme = theme,
            localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <>
            <div
                className={theme === 'light' ? 'toggle light' : 'toggle dark'}
                onClick={() => setTheme((prev) => prev === 'light' ? 'dark' : 'light')}
            ></div>
        </>
    )
}