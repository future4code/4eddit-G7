import React from "react";
import { PostWrapper } from "./style"
import { PostCard } from "../../components/PostCard/PostCard";
import { BoxComent } from "../../components/Coments/BoxComent";
import { ComentWritter } from "../../components/Coments/ComentWritter";

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
                <PostCard 
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