import React from "react";
import styled from "styled-components";
import { BoxPost } from "../../components/BoxPost/BoxPost";
import { BoxComent } from "../../components/Coments/BoxComent";
import { ComentWritter } from "../../components/Coments/ComentWritter";

const PostWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: space-around;
`


class Post extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            user: "Nome do Usuário",
            title: "Título do Post",
            post: "Texto do Post",
            coment: "Texto do Comentário",
        };
    };

    render () {
        return (
            <PostWrapper>
                <BoxPost 
                    user={this.state.user}
                    post={this.state.post}
                    title={this.state.title}
                />
                <ComentWritter />
                <BoxComent 
                    user={this.state.user}
                    coment={this.state.coment}
                />
                <BoxComent 
                    user={this.state.user}
                    coment={this.state.coment}
                />
                <BoxComent 
                    user={this.state.user}
                    coment={this.state.coment}
                />
            </PostWrapper>
        );
    };
};




export default (Post)