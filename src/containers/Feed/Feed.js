import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router/index";

class Feed extends React.Component {
    constructor (props) {
        super(props);
        this.state = {

        };
    };

    render () {
        return (
            <div>
                <button onClick={this.props.goToPost}>Post</button>
            </div>
        );
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        goToPost: () => {dispatch(push(routes.post))},
    };
};



export default connect (
    null, 
    mapDispatchToProps
    )(Feed)