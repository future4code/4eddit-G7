import React from "react";
import {
    ComentWritterWrapper, ComentWritterText, ComentWritterFooter
}
from "./style"

export function ComentWritter(props) {
    return (
        <ComentWritterWrapper>
            <ComentWritterText>Escreva seu Comentário</ComentWritterText>
            <ComentWritterFooter>Comentar</ComentWritterFooter>
        </ComentWritterWrapper>
    )
}

export default (ComentWritter)