import React from "react";
import styled from "styled-components";

const ComentWritterWrapper = styled.div `
    border-style: solid;
    border-width: thin;
    margin-bottom: 5vh;
    min-height: 15vh;
    width: 40vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: space-around;
`

const ComentWritterText = styled.div `
    min-height: 10vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ComentWritterFooter = styled.div `
    border-style: solid none none none;
    border-width: thin;
    height: 5vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export function ComentWritter(props) {
    return (
        <ComentWritterWrapper>
            <ComentWritterText>Escreva seu Comentário</ComentWritterText>
            <ComentWritterFooter>Comentar</ComentWritterFooter>
        </ComentWritterWrapper>
    )
}

export default (ComentWritter)