import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router/index";

class Register extends React.Component {
    constructor (props) {
        super(props);
        this.state = {

        };
    };

    render () {
        return (
            <div>
                <button onClick={this.props.goToFeed}>Feed</button>
            </div>
        )
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        goToFeed: () => {dispatch(push(routes.feed))} 
    }
}

export default connect (
    null, 
    mapDispatchToProps
    )(Register)