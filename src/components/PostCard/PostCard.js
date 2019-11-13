import React from "react";
import { BoxFooter } from "../BoxFooter/BoxFooter";
import { PostCardContainer, HeaderPost, TextContainer, TextItem, } from "./style"

export function PostCard(props) {
	return (
		<PostCardContainer>
			<HeaderPost>
				<TextItem>{props.username}</TextItem>
			</HeaderPost>
			<TextContainer>
				<TextItem>{props.text}</TextItem>
			</TextContainer>
			<BoxFooter />
		</PostCardContainer>
	)
}

export default PostCard;