import React from "react";
import { Link } from "react-router-dom";

export const taskArr = [
    {
        id: 1, 
        title: "Make Breakfast", 
        description: "Grab a meal before starting the day."
    },
    {
        id: 2, 
        title: "Get ready for work", 
        description: "Wear pants..."
    },
    {
        id: 3, 
        title: "Drop off kids at school", 
        description: "Kids gotta learn too."
    },
    {
        id: 4, 
        title: "Grab a coffee", 
        description: "x-large (aka venti at some establishments)"
    },
    {
        id: 5, 
        title: "Check on the spouse", 
        description: "Happy spouse happy house."
    }
]

export default function TaskList() {
    
    return (
        <>
            <h1>Task List:</h1>
            <ol>
                {taskArr.map(task => (
                    <li key={task.id} className="task">
                        <Link to={`${task.id}`}>{task.title}</Link>
                    </li>
                ))}
            </ol>
        </>
    );
}