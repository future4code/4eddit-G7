import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router/index";
import TextField from '@material-ui/core/TextField';
import { HomePageWrapper, StyledForm, StyledFormControl, StyledButton, Buttons } from "./style";

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