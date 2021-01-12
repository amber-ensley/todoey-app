import React, { Component } from 'react';
import "./Tasks.css";
import { taskData } from "../../taskData";
import { myGuid } from "../../utils/guidGenerator";
import TaskCard from './TaskCard';

const allTaskTypes = (() => {
    let taskTypes = []; 
    taskData[0].tasks.forEach(task => taskTypes.push(task.type));
    return taskTypes.filter((type, index) => taskTypes.indexOf(type) === index); // ["personal", "work", "goals"]
})();

export default class TasksContainer extends Component {

    constructor() {
        super();
        this.state = {
            tasks: taskData[0].tasks,
            newTask: {task: "", type: allTaskTypes[0], _creator: taskData[0].username},
            canEdit: false
        }
    }

    // Create
    handleChange = (event) => {
        let newTask = {...this.state.newTask, [event.target.name]: event.target.value};
        this.setState({newTask: newTask})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let newTask = {...this.state.newTask, _id: myGuid()};
        if(!newTask.task) {
            alert("Please fill out form completely")
        } else {
            this.setState(prevState => {
                return {
                   ...prevState,
                   tasks: prevState.tasks.concat(newTask),
                   newTask: {task: "", type: allTaskTypes[0], _creator: taskData[0].username} 
                }
            })
        }
    }

    // Delete

    deleteTask = (id) => {
        this.setState(prevState => {
            return{
                ...prevState,
                tasks: prevState.tasks.filter(task => task._id !== id)
            }
        })

    }

    // Update

    editTask = (task) => {
        this.setState({newTask: task, canEdit: true})
    }

    handleEditedTask = () => {
        this.setState(prevState => {
            return{
                ...prevState,
                tasks: prevState.tasks.filter(task => task._id !== prevState.newTask._id),
                canEdit: false
            }
        })
    }

    handleCancelledTask = () => {
        this.setState(prevState => {
            return{
                ...prevState,
                newTask: {task: "", type: allTaskTypes[0], _creator: taskData[0].username},
                canEdit: false
            }
        })
    }

    render(){
    
        return(
            <div className="Tasks container mx-auto">
 
                <form className="form-inline justify-content-center form-content" onSubmit={this.handleSubmit}>
                    <div className="form-group p-2">
                        <label>
                            Task:
                        </label>
                        <input className="ml-2" type="text" name="task" value={this.state.newTask.task} onChange={this.handleChange}/>
                    </div>

                    <div className="form-group p-2">
                        <label>
                            Type:
                        </label>
                        <select className="ml-2" name="type" value={this.state.newTask.type} onChange={this.handleChange}>
                            {allTaskTypes.map((type, index)=><option key={index} value={type}>{type}</option>)}
                        </select>
                    </div>

                    <input className="btn btn-outline-success mr-2" hidden={this.state.canEdit} type="submit" value="Add Task" />
                    <input className="btn btn-outline-success mr-2" hidden={!this.state.canEdit} type="submit" value="Edit Task" onClick={this.handleEditedTask} />
                    <input className="btn btn-outline-secondary mr-2" hidden={!this.state.canEdit} type="button" value="Cancel" onClick={this.handleCancelledTask} />
                </form>

            <div className="mt-5">
                {allTaskTypes.map((type, index)=>{
                    return <TaskCard
                            key={index}
                            type={type}
                            tasks={this.state.tasks}
                            deleteTask={this.deleteTask}
                            editTask={this.editTask} />
                })}
            </div>

            </div>
        )


    }
}