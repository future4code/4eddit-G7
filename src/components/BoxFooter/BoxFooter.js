import React from "react";
import {
    BoxFooterWrapper, ReactionButtons, Button
}
from "./style"

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
                    <Button onClick={this.onClickThumbDown}> - </Button>
                    <p>{this.state.thumb}</p>
                    <Button onClick={this.onClickThumbUp}> + </Button>
                </ReactionButtons>
                <div>
                    <p>{this.state.comentsNumber}</p>
                </div>
            </BoxFooterWrapper>
        )
    };
};