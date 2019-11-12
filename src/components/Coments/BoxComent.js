import React from "react";
import { BoxFooter } from "../BoxFooter/BoxFooter"
import {
    BoxComentWrapper, BoxComentHeader, BoxComentText
}
from "./style"

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