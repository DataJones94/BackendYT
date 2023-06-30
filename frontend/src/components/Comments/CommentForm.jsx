import axios from 'axios';
import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';

const CommentForm = (props) => {
    const[user, token]= useAuth()
    const[newComment, setNewComment]= useState("")

    async function postNewComment(event){
        event.preventDefault() //will stop page from refresing when submitting form
        let commentObject = {
            video_id: props.video_Id,
            text: newComment,
            likes: 0,
            dislikes: 0,
        }
        let response = await axios.post("http://127.0.0.1:8000/api/comments/hello/",{commentObject},{headers:{Authorization: "Bearer "+ token}})
        console.log(response.data);
    } 




    return ( 
        <form onSubmit={(event) => postNewComment(event)}>
            <lable>
                Write Your Comments Here!
            </lable>
            <input type="text" value={newComment} onChange={setNewComment}/>
            <button type='submit'>Submit!</button>
        </form>
     );
}
 
export default CommentForm;