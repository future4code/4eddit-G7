import styled from 'styled-components';
import { TextField } from '@material-ui/core';

export const NewPostContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  background-color: #fff;
  width: 500px;
  padding: 10px;
  box-shadow: 10px 10px 10px #2A3439;
`
export const StyledTitlePost = styled(TextField)`
  width: 80%;
`
export const StyledTextArea = styled(TextField)`
  width: 100%;
`
export const StyledTitle = styled.h2`
  margin: 0;
`
export const ButtonPost = styled.button`
  width: 60%;
  border: none;
  font-family: 'Ubuntu';
  height: 40px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.5s;

  &:hover{
    background-color: #E67221;
    color: #fff;
  }
`