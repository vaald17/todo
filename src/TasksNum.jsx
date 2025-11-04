import './TasksNum.css'
import { useState, useEffect } from 'react'
import { useMotionValue, motion, animate, useTransform, useMotionValueEvent } from "motion/react"
import { AnimateNumber } from "motion-plus-react"

export default function TasksNum({ nums }) {
    // console.dir('render nums');
    const count = useMotionValue(0);
    const rounded = useTransform(count, latest => Math.round(latest));
    const [display, setDisplay] = useState(rounded.get());
    useEffect(() => {
        const controls = animate(count, nums, { duration: 0.1 })
        return () => controls.stop()
    }, [nums]);
    // console.dir(rounded);
    useMotionValueEvent(rounded, "change", latest => setDisplay(Number(latest)));
    return (
        <div className="nums">
            <div>Numbers of Tasks: <AnimateNumber className='num'>{display}</AnimateNumber></div>
        </div>
    )
}