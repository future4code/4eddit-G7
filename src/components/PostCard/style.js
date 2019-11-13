import styled from 'styled-components';

export const PostCardWrapper = styled.div `
    border-style: solid;
    border-width: thin;
    margin-bottom: 5vh;
    min-height: 35vh;
    width: 40vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: space-around;
`

export const PostCardHeader = styled.div `
    border-style: none none solid none;
    border-width: thin;
    height: 5vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PostCardTitle = styled.div `
    border-style: none none solid none;
    border-width: thin;
    height: 10vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PostCardText = styled.div `
    min-height: 15vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`