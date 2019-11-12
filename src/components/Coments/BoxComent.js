import React from "react";
import styled from "styled-components";
import { BoxFooter } from "../BoxFooter/BoxFooter"

const BoxComentWrapper = styled.div `
    border-style: solid;
    border-width: thin;
    margin-bottom: 5vh;
    min-height: 20vh;
    width: 40vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: space-around;
`

const BoxComentHeader = styled.div `
    border-style: none none solid none;
    border-width: thin;
    height: 5vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const BoxComentText = styled.div `
    min-height: 10vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const BoxComentFooter = styled.div `
    border-style: solid none none none;
    border-width: thin;
    height: 5vh;
    width: 100%;
`

export function BoxComent(props) {
    return (
        <BoxComentWrapper>
            <BoxComentHeader>{props.user}</BoxComentHeader>
            <BoxComentText>{props.coment}</BoxComentText>
            <BoxFooter></BoxFooter>
        </BoxComentWrapper>
    )
}

export default (BoxComent)