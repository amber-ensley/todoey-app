import React from "react";
import "./Home.css";

const HomeContainer = () => {

    return(
        <div className="Home">
            This is the Home Component
        </div>
    )
};

const LoggedInWarning = (WrappedComponent) => {
    return props => (
        <> {props.isAdmin ? <WrappedComponent {...props} /> : <p>You need to be logged in to see this page</p>}
        </>
    )
}
const HomeContainerWithLogin = LoggedInWarning(HomeContainer);

export { HomeContainerWithLogin as default };