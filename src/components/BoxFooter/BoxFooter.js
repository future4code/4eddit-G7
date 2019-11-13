import React from "react";
import {BoxFooterWrapper, ReactionButtons, Button} from "./style"
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

export class BoxFooter extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            thumb: 0,
            comentsNumber: 0 + " Comentários"
        };
    };

    onClickThumbUp = () => {
        const thumbUp = 1;
        this.setState ({thumb: thumbUp});
    }

    onClickThumbDown = () => {
        const thumbDown = -1;
        this.setState ({thumb: thumbDown});
    }

    render () {
        return (
            <BoxFooterWrapper>
                <ReactionButtons>
                    <ThumbUpIcon onClick={this.onClickThumbUp}> + </ThumbUpIcon>
                    <p>{this.state.thumb}</p>
                    <ThumbDownIcon onClick={this.onClickThumbDown}> - </ThumbDownIcon>
                </ReactionButtons>
                <div>
                    <p>{this.state.comentsNumber}</p>
                </div>
            </BoxFooterWrapper>
        )
    };
};