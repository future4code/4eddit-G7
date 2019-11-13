import axios from "axios"

const setPosts = (postsList) => {
    return {
        type: "SET_POSTS",
        payload: { postsList: postsList }
    }
}

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
        console.log("Resultado:", response.data.posts)
        dispatch(setPosts(response.data.posts))
    } catch (e) {
        console.log("Error:", e.message);
    }
}