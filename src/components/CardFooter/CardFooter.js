import React from "react";
import {CardFooterWrapper, ReactionButtons} from "./style";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { connect } from "react-redux";
import { vote } from "../../Actions/votes";

export class CardFooter extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
        };
    };

    onClickThumbUp = (id) => {
        const directionVote = 1
        this.props.vote(directionVote, id)
    }

    onClickThumbDown = (id) => {
        const directionVote = -1
        this.props.vote(directionVote, id)
    }

    render () {
        const id = this.props.id
        return (
            <CardFooterWrapper>
                <ReactionButtons>
                    <ThumbUpIcon onClick={() => {this.onClickThumbUp(id)}} />
                        <p>{this.props.votesCount}</p>
                    <ThumbDownIcon onClick={() => {this.onClickThumbDown(id)}} />
                </ReactionButtons>
                <div>
                    <p>{this.state.comentsNumber}</p>
                </div>
            </CardFooterWrapper>
        )
    };
};

const mapDispatchToProps = (dispatch) => ({
    vote: (directionVote, id) => {dispatch(vote(directionVote, id))}
})

export default connect (null, mapDispatchToProps)(CardFooter)