import styled from 'styled-components';
import 'typeface-ubuntu';
import { TextField } from '@material-ui/core';

export const PostContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3D4F52;
  font-family: "Ubuntu";
`
export const PostCard = styled.div`
  width: 450px;
  height: 250px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 10px 10px 10px #2A3439;
`
export const HeaderPost = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30px;
`
export const TextContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  padding: 10px;
`
export const FooterPost = styled.div`
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  margin-top: 10px;
`
export const TextItem = styled.p`
  margin: 0;
`

export const Comments = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  cursor: pointer;
`
export const Thumbs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 70px;
`
export const ThumbArrow = styled.img`
  width: 16px;
  cursor: pointer;
`