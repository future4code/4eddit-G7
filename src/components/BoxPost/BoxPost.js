import React from "react";
import styled from "styled-components";
import { BoxFooter } from "../BoxFooter/BoxFooter"

const BoxPostWrapper = styled.div `
    border-style: solid;
    border-width: thin;
    margin-bottom: 5vh;
    min-height: 35vh;
    width: 40vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: space-around;
`

const BoxPostHeader = styled.div `
    border-style: none none solid none;
    border-width: thin;
    height: 5vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const BoxPostTitle = styled.div `
    border-style: none none solid none;
    border-width: thin;
    height: 10vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const BoxPostText = styled.div `
    min-height: 15vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export function BoxPost(props) {
    return (
        <BoxPostWrapper>
            <BoxPostHeader>{props.user}</BoxPostHeader>
            <BoxPostTitle>{props.title}</BoxPostTitle>
            <BoxPostText>{props.post}</BoxPostText>
            <BoxFooter></BoxFooter>
        </BoxPostWrapper>
    )
}

export default (BoxPost)