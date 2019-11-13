import axios from "axios"
import { getPosts } from "./post"

export const vote = (directionVote, id) => async (dispatch) => {
    const data = {
        direction: directionVote
    }
    console.log(data, id)
    const token = window.localStorage.getItem("token");
    try {
        await axios.put(
            `https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/${id}/vote`,
            data,
            {
                headers: {
                    auth: token
                }
            }
        );
    } catch (e) {
        console.log("Error:", e.message);
    }
    dispatch(getPosts())
}