import React from "react";
import styled from "styled-components";


const BoxFooterWrapper = styled.div ` 
    padding: 0 10px 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-style: solid none none none;
    border-width: thin;
    height: 5vh;
    width: 100%;
`

const ReactionButtons = styled.div`
    display: flex;
    align-items: center;
`

const Button = styled.button `
    height: 100%;
`

const ComentsNumber = styled.div `

`

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
                <ComentsNumber>
                    <p>{this.state.comentsNumber}</p>
                </ComentsNumber>
            </BoxFooterWrapper>
        )
    };
};