import React, { useEffect} from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router/index";
import { PostContainer} from "./style";
import NewPost from "../../components/NewPost/NewPost";
import PostCard from "../../components/PostCard/PostCard"
import { getPosts } from "../../Actions/post";

const Feed = (props) => {

	useEffect(() => {
		const token = window.localStorage.getItem("token");
		if(!token) {
			props.goToRegister();
		}	
		props.getPost();
	}, [])

	return (
		<PostContainer>
			<NewPost/>
			{props.posts.map(post => {
				return <PostCard
							title={post.title}
							username={post.username}
							text={post.text}
							id={post.id}
							votesCount={post.votesCount}
							commentsNumber={post.commentsNumber}
						/>
			})}
		</PostContainer>
	)

}


const mapStateToProps = (state) => {
	return {
		posts: state.posts
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		goToPost: () => { dispatch(push(routes.post)) },
		getPosts: () => { dispatch(getPosts()) },
		goToRegister: () => { dispatch(push(routes.register)) }
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Feed)