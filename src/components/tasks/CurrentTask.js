import React from "react";
import "./Tasks.css";

const CurrentTask = (props) => {
    const { task } = props.task;
    console.log(props);

    return(
        <div className="Task card">
            <div className="card-body row">
                <div className="col-md-10">{task}</div>
                <div className="col-md-2">
                    <button className="btn btn-outline-danger mr-2" type="button">Delete</button>
                    <button className="btn btn-outline-warning mr-2" type="button">Edit</button>
                </div>
            </div>
        </div>
    )
};

export { CurrentTask as default };
