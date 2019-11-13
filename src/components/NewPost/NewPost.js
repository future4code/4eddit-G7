import React from 'react';
import { NewPostContainer, StyledTextArea, StyledTitle, ButtonPost, StyledTitlePost } from "./style";

function NewPost() {
  return (
    <NewPostContainer>
      <StyledTitle>Faça um novo Post!</StyledTitle>
      <StyledTitlePost
        label="Qual o título do Post?"
        margin="normal"
      />
      <StyledTextArea
        label="O que você deseja postar?"
        multiline
        rowsMax="5"
        margin="normal"
        variant="outlined"
      />
      <ButtonPost>POSTAR</ButtonPost>
    </NewPostContainer>
  )
}
export default NewPost;