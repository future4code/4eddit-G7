import styled from 'styled-components';

export const PostCardContainer = styled.div`
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

export const TitleContainer = styled.div`
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
export const TextItem = styled.p`
  margin: 0;
`