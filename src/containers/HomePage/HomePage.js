import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router/index";
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import { Button, FormControl } from '@material-ui/core';

const HomePageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 90%;
    margin: auto;
    min-width: 900px;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25%;
  margin: auto;  
  border: 1px solid black;
  border-radius: 5px;
`

const StyledFormControl = styled(FormControl)`
    display: flex;
    flex-direction: column;
    padding: 2% 5%;
`

const StyledButton = styled(Button)`
    margin: 5%;
`

const Buttons = styled.div`
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 30px;
`

class HomePage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {

        };
    };

    teste = () =>{
        console.log("teste");
    }

    render () {
        return (
            <HomePageWrapper>
                <StyledForm>
                    <StyledFormControl onSubmit={this.teste}>
                        <h2>Bem vindo ao Feddit!</h2>
                        <TextField fullWidth required name="email" type="email" required label="E-mail" />
                        <TextField fullWidth required name="password" type="password" label="Senha" />
                    </StyledFormControl>
                    <Buttons>
                        <StyledButton variant="contained" type="submit" color="primary" onClick={this.props.goToFeed}>Entrar</StyledButton>
                        <StyledButton variant="contained" color="primary" onClick={this.props.goToRegister}>Cadastrar</StyledButton>
                    </Buttons>
                </StyledForm>
            </HomePageWrapper>
        );
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        goToRegister: () => {dispatch(push(routes.register))},
        goToFeed: () => {dispatch(push(routes.feed))} 
    }
}

export default connect (
    null, 
    mapDispatchToProps
    )(HomePage)