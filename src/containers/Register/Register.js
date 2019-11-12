import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router/index";
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import { Button, FormControl } from '@material-ui/core';

const RegisterWrapper = styled.div`
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
    padding: 2% 1%;
`

const StyledButton = styled(Button)`
    margin: 5%;
`

const Buttons = styled.div`
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 30px;
`

class Register extends React.Component {
    constructor (props) {
        super(props);
        this.state = {

        };
    };

    render () {
        return (
            <RegisterWrapper>
                <StyledForm>
                    <StyledFormControl onSubmit={this.teste}>
                        <h2>Cadastro</h2>
                        <TextField fullWidth required name="name" required label="Nome de usuário" />
                        <TextField fullWidth required name="email" type="email" required label="E-mail" />
                        <TextField fullWidth required name="password" type="password" label="Senha" />
                    </StyledFormControl>
                    <Buttons>
                        <StyledButton variant="contained" type="submit" color="primary" onClick={this.props.goToFeed}>Cadastrar</StyledButton>
                    </Buttons>
                </StyledForm>
            </RegisterWrapper>
        );
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        goToFeed: () => {dispatch(push(routes.feed))} 
    }
}

export default connect (
    null, 
    mapDispatchToProps
    )(Register)