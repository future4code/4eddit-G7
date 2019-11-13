import React from "react";
import CardFooter from "../CardFooter/CardFooter"
import {
    BoxComentWrapper, BoxComentHeader, BoxComentText
}
from "./style"

export function BoxComent(props) {
    return (
        <BoxComentWrapper>
            <BoxComentHeader>{props.user}</BoxComentHeader>
            <BoxComentText>{props.coment}</BoxComentText>
            <CardFooter></CardFooter>
        </BoxComentWrapper>
    )
}

export default (BoxComent)