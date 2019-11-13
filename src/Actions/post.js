import axios from "axios"

const setPosts = (postsList) => {
    return {
        type: "SET_POSTS",
        payload: { postsList: postsList }
    };
};

export const getPosts = () => async (dispatch) => {
    const token = window.localStorage.getItem("token");
    try {
        const response = await axios.get(
            "https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts",
            {
                headers: {
                    auth: token
                }
            }
        );
        dispatch(setPosts(response.data.posts))
    } catch (e) {
        console.log("Error:", e.message);
    };
};

export const createPost = (text, title) => async (dispatch) => {
    const data = {
        text,
        title
    }
    const token = window.localStorage.getItem("token");
    try {
        await axios.post(
            "https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts",
            data,
            {
                headers: {
                    auth: token
                }
            }
        );
    } catch (e) {
        console.log("Error:", e.message);
    };
    dispatch(getPosts());
};