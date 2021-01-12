import React from "react";
import { Link } from "react-router-dom";
import "./Tasks.css";

const Task = ({editTask, deleteTask, id, task}) => {

    
        return(
            <div className="Task card" key={id}>
            <div className="card-body row">
                <div className="col-md-10">
                    <Link to={"/tasks/" + id} className="task-link">{task}</Link>
                </div>
                <div className="col-md-2">
                    <button className="btn btn-outline-danger mr-2" type="button" onClick={deleteTask}>Delete</button>
                    <button className="btn btn-outline-warning mr-2" type="button" onClick={editTask}>Edit</button>
                </div>
            </div>
        </div>
        )
    
};

export { Task as default };