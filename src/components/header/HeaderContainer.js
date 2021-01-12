import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "./Header.css";
import { taskData } from "../../taskData";

export default class HeaderContainer extends Component {
    constructor() {
        super();
        this.state = {
            user: taskData[0].username,
            appName: "Todoey",
            routes: [{path: "/", label: "Home"}, {path: "/tasks", label: "Tasks"}, {path: "/journal", label: "Journal"}]
        }
    }

    render() {
        return(
            <Navbar className="Header">
                <Navbar.Brand id="navbarText" href="/">{this.state.appName}</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-start">
                  {this.state.routes.map((route, index) => {
                      return(
                      <Navbar.Text key={index} id="navbarText" className="p-2">
                          <Link to={route.path} id="navbarText">{route.label}</Link>
                     </Navbar.Text>)
                  })}
                </Navbar.Collapse>

                <Navbar.Collapse className="justify-content-end">
                  <Navbar.Text id="navbarText" className="p-2">
                    Signed in as: {this.state.user}
                  </Navbar.Text>
                  <Navbar.Text id="navbarText" className="p-2" onClick={this.props.toggle}>
                    {this.props.log}
                  </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}