//listing all of my comments
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Comment from './Comment';


const [comments, setComments] = useState([]);

const CommentList = (props) => {
    


    useEffect(() => {
        const fetchComments = async () => {
            try{
                const response = await axios.get(`http://127.0.0.1:8000/api/comments/12345/`);
                console.log(response.data);
                setComments(response.data);
            }catch (error) {
                console.error(error);
            }


    };
    fetchComments(); //!this will allow your comments to stay displayed 
    //!always instead of when only being called by an event handler.
}, [props.video_id]);

    
     return ( 
         <div>
            {comments.map((comment) =>(
                <div key={comment.id}>
                    //? This is pulling the comment page to display the {comment} #passingprops
                    <Comment comment ={comment}/>
                   </div>
            ))              
            }
         </div>
         );
            
}        
export default CommentList;
        