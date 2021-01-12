import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import "./App.css";
import HeaderContainer from './components/header/HeaderContainer';
import TasksContainer from './components/tasks/TasksContainer';
import HomeContainer from "./components/home/HomeContainer";
import JournalContainer from "./components/journal/JournalContainer";
import NotFound from "./components/notfound/NotFound";
import Sidebar from "./components/sidebar/Sidebar";
import CurrentTask from "./components/tasks/CurrentTask";
import { taskData } from "./taskData";

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isAdmin: false,
            log: "Login"
        }
    };

    toggleLogin = () => {
        this.setState(prevState => {
            return{
                isAdmin: !prevState.isAdmin,
                log: prevState.isAdmin ? "Login" : "Logout"
            }
        })
    };

    selectedTask = (id) => {
        return taskData[0].tasks.filter(task => task._id === id)[0]
    };

    render() {
        return(
            <BrowserRouter>
                <div className="App">
                        <HeaderContainer toggle={this.toggleLogin} log={this.state.log} />
                    <Container fluid>
                        <Row>
                            <Col xs={2} className="sidebar-wrapper">
                                <Sidebar toggle={this.toggleLogin} log={this.state.log}/>
                            </Col>
                            <Col xs={10}>
                                <Switch>
                                    <Route exact path="/" render={() => <HomeContainer isAdmin={this.state.isAdmin} />} /> 
                                    <Route exact path="/tasks" component={TasksContainer} /> 
                                    <Route path="/journal" component={JournalContainer} />
                                    <Route 
                                    path="/tasks/:id" 
                                    render={({match})=> <CurrentTask match={match} id={match.params.id} task={this.selectedTask(match.params.id)} />} />  
                                    <Route component={NotFound} /> 
                                </Switch>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </BrowserRouter>
        )
    }
}