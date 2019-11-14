import React from "react";
import { ComentWritterWrapper, ComentWritterText, StyledTextField, StyledButton} from "./style"
import { createComment } from '../../Actions/post'
import { connect } from 'react-redux'

class ComentWritter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }

    onSubmitForm = (event) => {
        const { text } = this.state;
        const { postId } = this.props
        this.props.createComment(text, postId);
        event.preventDefault();
    }


    onHandleFieldChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const { text } = this.state
        return (
            <ComentWritterWrapper>
                <ComentWritterText onSubmit={this.onSubmitForm}>
                    <StyledTextField
                        fullWidth
                        required
                        label="Deixe seu comentário!"
                        margin="normal"
                        name="text"
                        value={text}
                        onChange={this.onHandleFieldChange}
                    />
                    <StyledButton color="primary" variant="contained" type="submit">COMENTAR</StyledButton>
                </ComentWritterText>
            </ComentWritterWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    postId: state.id.id,
})

const mapDispatchToProps = (dispatch) => {
    return {
        createComment: (text, postId) => { dispatch(createComment(text, postId)) }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ComentWritter);