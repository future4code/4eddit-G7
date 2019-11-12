import React from "react";
import { BoxFooter } from "../BoxFooter/BoxFooter";
import {
    BoxPostWrapper, BoxPostHeader, BoxPostTitle, BoxPostText
    } 
from "./style"

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