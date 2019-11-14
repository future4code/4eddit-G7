import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

export const BoxComentWrapper = styled.div `    
    border-radius: 5px;
    box-shadow: 0px 3px 5px #aaa;
    margin: 10px auto;
    min-height: 150px;
    width: 25%;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;    
    justify-content: space-around;
    background-color: white;
    padding: 1%;
`

export const BoxComentHeader = styled.div`
    height: 40px;
    border-width: thin;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    
`

export const BoxComentText = styled.div `
    min-height: 10vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: lightyellow;
    border-radius: 5px;
    font-family: 'Roboto', sans-serif;
`

export const ComentWritterWrapper = styled.div `    
    border-radius: 5px;
    box-shadow: 0px 3px 5px #aaa;
    background-color: white;
    min-height: 150px;
    width: 25%;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: space-around;
    padding: 1%;
    margin: 10px auto;
`

export const ComentWritterText = styled.form `    
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ComentWritterFooter = styled.div `    
    border-width: thin;    
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const StyledTextField = styled(TextField)`
    margin: 10px;
`
export const StyledButton = styled(Button)`
    margin: 3%;
    &:hover {
        font-weight: bold;
    }
`
export const StyledThumbUp = styled(ThumbUpIcon)`
    margin: 5px;
    cursor: pointer;
`

export const StyledThumbDown = styled(ThumbDownIcon)`
    margin: 5px;
    cursor: pointer;
`