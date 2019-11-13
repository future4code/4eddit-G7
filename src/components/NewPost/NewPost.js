import React from 'react';
import { connect } from "react-redux";
import { NewPostContainer, StyledTextArea, StyledTitle, ButtonPost, StyledTitlePost } from "./style";
import { createPost } from "../../Actions/post";


class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      title: "",
    }
  }

  
  onSubmitForm = (event) => {        
    const {text, title} = this.state;
    this.props.createPost(text, title);
    event.preventDefault();
  }

  onHandleFieldChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
  }

  render() {
    const { text, title } = this.state
    return (
      <NewPostContainer onSubmit={this.onSubmitForm}>
        <StyledTitle>Faça um novo Post!</StyledTitle>
        <StyledTitlePost
          required
          label="Qual o título do Post?"
          margin="normal"
          name="title"
          value={title}
          onChange={this.onHandleFieldChange}
        />
        <StyledTextArea
          required
          label="O que você deseja postar?"
          multiline
          rowsMax="5"
          margin="normal"
          variant="outlined"
          name="text"
          value={text}
          onChange={this.onHandleFieldChange}
        />
        <ButtonPost>POSTAR</ButtonPost>
      </NewPostContainer>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (text, title) => {dispatch(createPost(text, title))}
  };
};

export default connect (
  null,
  mapDispatchToProps
)(NewPost);