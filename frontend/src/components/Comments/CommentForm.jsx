import axios from 'axios';
import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';

const CommentForm = (props) => {
    const[user, token]= useAuth();
    const[text, setText]= useState("");
    const[likes, setLikes] = useState(0);
    const[dislikes, setDislikes] = useState(0);
    


    async function posttext(commentObject){
        debugger
        let response = await axios.post(`http://127.0.0.1:8000/api/comments/${props.video_id}/`,
        commentObject,
        {
            headers:{
                    Authorization: "Bearer " + token}
        });
        console.log(response.data);
    };

    function handleSubmit(event){
       event.preventDefault() //will stop page from refresing when submitting form
        let commentObject = {
            video_id: props.video_id,
            text: text,
            likes: likes,
            dislikes: dislikes,
        } ;
        posttext(commentObject);
    };


    




    return ( 
        <div className='container text-center'>
        <form onSubmit={handleSubmit}>
            <label>
                Write Your Comments Here!
            </label>
            <input type="text" value={text} onChange={(event) => setText(event.target.value)}/>
            <input type="text" value={likes} onChange={(event) => setLikes(event.target.value)}/>
            <input type="text" value={dislikes} onChange={(event) => setDislikes(event.target.value)}/>
            <button type='submit'>Submit!</button>
        </form>
        </div>
     );
}
 
export default CommentForm;
