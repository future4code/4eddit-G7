import React from "react";
import { BoxFooter } from "../BoxFooter/BoxFooter";
import {
    PostCardWrapper, PostCardHeader, PostCardTitle, PostCardText
    } 
from "./style"

export function PostCard(props) {
    return (
        <PostCardWrapper>
            <PostCardHeader>{props.user}</PostCardHeader>
            <PostCardTitle>{props.title}</PostCardTitle>
            <PostCardText>{props.post}</PostCardText>
            <BoxFooter/>
        </PostCardWrapper>
    )
}

export default (PostCard)