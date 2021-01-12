import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "./Sidebar.css";

class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
            routes: [{path: "/", label: "Home"}, {path: "/tasks", label: "Tasks"}, {path: "/journal", label: "Journal"}]
        }
    };

    render() {
        console.log(this.props)
        return(
        <>
            <Nav 
            className="col-md-12 d-none d-md-block Sidebar"
            activeKey="/home"
            onSelect={selectedKey => this.props.history.push(selectedKey)} >
                <div className="sidebar-sticky"></div>
                {this.state.routes.map(route => {
                    return(
                        <Nav.Item key={route.label} >
                            <Nav.Link className="sidebarText" eventKey={route.path}>{route.label}</Nav.Link>
                        </Nav.Item>
                    )
                })}

                <Nav.Item>
                    <Nav.Link className="sidebarText" onClick={this.props.toggle}>{this.props.log}</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
        )
    }
};

// const SidebarWithRouter = withRouter(Sidebar);

export default withRouter(Sidebar);