import React, { useState } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router/index";
import TextField from '@material-ui/core/TextField';
import { HomePageWrapper, StyledTextField, StyledForm, StyledFormControl, StyledButton, Buttons } from "./style";
import { signIn } from "../../Actions/signUp";

const HomePage = props => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmitForm = (event) => {    
        event.preventDefault();
        console.log(email, password)    
        props.signIn(email, password);
    }

    const onHandleEmailFieldChange = (event) => {
        setEmail(event.target.value)

    }

    const onHandlePasswordFieldChange = (event) => {
        setPassword(event.target.value)
    }

    return (
        
        <HomePageWrapper>
            <StyledForm onSubmit={onSubmitForm}>
                <StyledFormControl>
                    <h2>Bem vind@ ao Feddit!</h2>
                    <StyledTextField fullWidth required name="email" type="email" label="E-mail" 
                        value={email}                             
                        onChange={onHandleEmailFieldChange}
                        variant="outlined"
                    />
                    <StyledTextField fullWidth required name="password" type="password" label="Senha" 
                        value={password} 
                        onChange={onHandlePasswordFieldChange} 
                        variant="outlined"
                    />
                </StyledFormControl>
                <Buttons>
                    <StyledButton variant="contained" type="submit" color="primary">Entrar</StyledButton>
                    <StyledButton variant="contained" color="primary" onClick={props.goToRegister}>Cadastrar</StyledButton>
                </Buttons>
            </StyledForm>
        </HomePageWrapper>
    );

}


const mapDispatchToProps = (dispatch) => {
    return {
        goToRegister: () => {dispatch(push(routes.register))},
        goToFeed: () => {dispatch(push(routes.feed))},
        signIn: (email, password) => {dispatch(signIn(email, password))} 
    }
}

export default connect (
    null, 
    mapDispatchToProps
    )(HomePage)