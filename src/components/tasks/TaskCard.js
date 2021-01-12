import React from "react";
import Task from "./Task";

const TaskCard = (props) => {
    const {type, tasks, editTask, deleteTask} = props;

        // Read
        // I separated the viewTasksHandler method from the TasksContainer
        // This is because the TaskCard is the component that should render
        // all its related tasks
        // So it made more sense for me to have this logic live here instead

        // the edit task method however is now broken
        // we have to figure out how to pass the data that our parent component needs

        const viewTasksHandler = () => {
            return tasks.map((userTask) => {
            return userTask.type === type ?
            <Task 
                key={userTask._id}
                id={userTask._id}
                task={userTask.task}
                deleteTask={()=>deleteTask(userTask._id)}
                editTask={()=>editTask(userTask)} /> 
            : null
            })
        }

        return(
            <div>
                <h4 className="text-center">{type}</h4>
                <ul>
                    {viewTasksHandler()}
                </ul>
            </div>
        )
};

export { TaskCard as default };