import React from "react"
import { useNavigate } from "react-router-dom" //helps navagate from page to page
import axios from 'axios'

import useAuth from "../../hooks/useAuth"
import useCustomForm from "../../hooks/useCustomForm"
import useInput from "../../hooks/useInput"
import SearchBar from "../../components/SearchBar/SearchBar"


let initialValues ={
    video_id: "",
    text:"",
    likes: "",
    dislikes:"",
};

const SearchPage =()=>{
    const [user, token] = useAuth() //grabs user info and token
    const navigate = useNavigate()
    const {formData, handleInputChange, handleSubmit} = useCustomForm(initialValues, getSearchedVideos)

    async function getSearchedVideos(){
        try {
            let response = await axios.get("https://www.googleapis.com/youtube/v3/search?q=bruno mars&key=AIzaSyBOjIIl_BTpBgRMqKV1Ot2eGinVk6lekbo&part=snippet&type=video&maxResults=5", formData, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            navigate("/")
        } catch (error) {
            console.log(error.message)
            
        }
    }

    return(
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    video_id:{""}
                    <input
                    type="text"
                    name="video_id"
                    value={formData.video_id}
                    onChange={handleInputChange}
                    />
                </label>
                <label>
                    text:{" "}
                    <input
                    type="text"
                    name="text"
                    value={formData.text}
                    onChange={handleInputChange}
                    />
                </label>
                <label>
                    likes:{" "}
                    <input
                    type="text"
                    name= "likes"
                    value={formData.likes}
                    onChange={handleInputChange} 
                    />
                </label>
                <label>
                    dislikes: {""}
                    <input
                    type= "text"
                    name="dislikes"
                    value={formData.dislikes}
                    onChange={handleInputChange}
                    />
                </label>
            </form>
        </div>

    )


}
export default SearchPage