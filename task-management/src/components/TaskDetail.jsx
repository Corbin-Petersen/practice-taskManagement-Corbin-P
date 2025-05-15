import React from "react";
import { useParams } from "react-router-dom";
import { taskArr } from "./TaskList";

console.log(taskArr);


export default function TaskDetail() {
    
    const { id } = useParams();
    const taskInfo = taskArr.find(task => task.id == id);

    return (
        <>
            <h1>Task Details</h1>
            <h2>{taskInfo.title}</h2>
            <p>{taskInfo.description}</p>
        </>
    );
}