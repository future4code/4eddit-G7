import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router/index";
import {
	PostCard, HeaderPost, FooterPost,
	Comments, Thumbs, PostContainer,TextContainer,
	TextItem,  ThumbArrow
} from "./style";
import ArrowUp from './img/arrowUp.png'
import ArrowDown from './img/arrowDown.png'
import NewPost from "../../components/NewPost/NewPost";

class Feed extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	};

	render() {
		return (
			<PostContainer>
				<NewPost/>
				<PostCard>
					<HeaderPost>
						<TextItem>Nome do usuário</TextItem>
					</HeaderPost>
					<TextContainer>
						<TextItem>Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.
							Quem num gosta di mim que vai caçá sua turmis! </TextItem>
					</TextContainer>
					<FooterPost>
						<Thumbs>
							<ThumbArrow src={ArrowUp} />
							0
							<ThumbArrow src={ArrowDown} />
						</Thumbs>
						<Comments>
							<TextItem> 0 comentários</TextItem>
						</Comments>
					</FooterPost>
				</PostCard>
			</PostContainer>
		);
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		goToPost: () => { dispatch(push(routes.post)) },
	};
};

export default connect(
	null,
	mapDispatchToProps
)(Feed)