import styled from "styled-components";
import { Button, FormControl } from '@material-ui/core';

export const RegisterWrapper = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
width: 90%;
margin: auto;
min-width: 900px;
`

export const StyledForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 25%;
margin: auto;
border: 1px solid black;
border-radius: 5px;
`

export const StyledFormControl = styled(FormControl)`
display: flex;
flex-direction: column;
padding: 2% 1%;
`

export const StyledButton = styled(Button)`
margin: 5%;
`

export const Buttons = styled.div`
display: flex;
flex-wrap: nowrap;
margin-bottom: 30px;
`