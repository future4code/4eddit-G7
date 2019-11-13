import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router/index";
import TextField from '@material-ui/core/TextField';
import { RegisterWrapper, StyledForm, StyledFormControl, StyledButton, Buttons } from "./Style";

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
                        <StyledButton 
                            variant="contained" 
                            type="submit" 
                            color="primary" 
                            onClick={this.props.goToFeed}>
                                Cadastrar
                        </StyledButton>
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