// import { useNavigate } from "react-router-dom" 
import axios from 'axios'
import { useState } from 'react';
import useAuth from "../../hooks/useAuth"
import useCustomForm from "../../hooks/useCustomForm"
import SearchBar from "../../components/SearchBar/SearchBar";
import React from 'react';
import { Link } from 'react-router-dom';

let initialValues ={
    video_id: "",
    text:"",
    likes: "",
    dislikes:"",
};

const SearchPage =()=>{
    const [user, token] = useAuth() //grabs user info and token
    const [videos, setVideos] = useState(
        [
            {
                "kind": "youtube#searchResult",
                "etag": "G5fYxRxst7tEGr3fV1LX8d6kLD0",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "UqyT8IEBkvY"
                },
                "snippet": {
                    "publishedAt": "2016-10-07T03:31:50Z",
                    "channelId": "UCoUM-UJ7rirJYP8CQ0EIaHA",
                    "title": "Bruno Mars - 24K Magic (Official Music Video)",
                    "description": "The official music video for Bruno Mars' \"24K Magic\" from the album '24K Magic'. Subscribe for the latest official music videos, ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/UqyT8IEBkvY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/UqyT8IEBkvY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/UqyT8IEBkvY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Bruno Mars",
                    "liveBroadcastContent": "none",
                    "publishTime": "2016-10-07T03:31:50Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "yF1Zn52ANGMBOwttplgKk6CljQs",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "LjhCEhWiKXk"
                },
                "snippet": {
                    "publishedAt": "2010-09-08T21:29:01Z",
                    "channelId": "UCoUM-UJ7rirJYP8CQ0EIaHA",
                    "title": "Bruno Mars - Just The Way You Are (Official Music Video)",
                    "description": "The official music video for Bruno Mars' \"Just The Way You Are\" from the album 'Doo-Wops & Hooligans'. Directed by Ethan Lader ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/LjhCEhWiKXk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/LjhCEhWiKXk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/LjhCEhWiKXk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Bruno Mars",
                    "liveBroadcastContent": "none",
                    "publishTime": "2010-09-08T21:29:01Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "pSEv6agHrMHNahVTezGh1GY6evQ",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "ekzHIouo8Q4"
                },
                "snippet": {
                    "publishedAt": "2013-02-05T20:01:34Z",
                    "channelId": "UCoUM-UJ7rirJYP8CQ0EIaHA",
                    "title": "Bruno Mars - When I Was Your Man (Official Music Video)",
                    "description": "The official music video for Bruno Mars' \"When I Was Your Man\" from the album 'Unorthodox Jukebox'. Directed by Cameron ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/ekzHIouo8Q4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/ekzHIouo8Q4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/ekzHIouo8Q4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Bruno Mars",
                    "liveBroadcastContent": "none",
                    "publishTime": "2013-02-05T20:01:34Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "d2F4uiTXPMkuW06DjOBFqF5Lelg",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "PMivT7MJ41M"
                },
                "snippet": {
                    "publishedAt": "2017-03-02T02:00:11Z",
                    "channelId": "UCoUM-UJ7rirJYP8CQ0EIaHA",
                    "title": "Bruno Mars - That’s What I Like [Official Music Video]",
                    "description": "The official music video for Bruno Mars' \"That's What I Like\" from the album '24K Magic'. Stream/Download: ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/PMivT7MJ41M/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/PMivT7MJ41M/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/PMivT7MJ41M/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Bruno Mars",
                    "liveBroadcastContent": "none",
                    "publishTime": "2017-03-02T02:00:11Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "gmM6ioSlgQlyFIetWfh2WmZIRWA",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "SR6iYWJxHqs"
                },
                "snippet": {
                    "publishedAt": "2010-11-22T16:55:48Z",
                    "channelId": "UCoUM-UJ7rirJYP8CQ0EIaHA",
                    "title": "Bruno Mars - Grenade (Official Music Video)",
                    "description": "The official music video for \"Grenade\" by Bruno Mars from the album 'Doo-Wops and Hooligans'. Directed by Nabil \"Today, I get to ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/SR6iYWJxHqs/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/SR6iYWJxHqs/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/SR6iYWJxHqs/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Bruno Mars",
                    "liveBroadcastContent": "none",
                    "publishTime": "2010-11-22T16:55:48Z"
                }
            }
        ]
    

    )
    const {formData, handleInputChange, handleSubmit} = useCustomForm(initialValues, getSearchedVideos)

    async function getSearchedVideos(){
        try {
            let response = await axios.get("https://www.googleapis.com/youtube/v3/search?q=bruno%20mars&key=AIzaSyBOjIIl_BTpBgRMqKV1Ot2eGinVk6lekbo&part=snippet&type=video&maxResults=5")
            setVideos(response.data.items)
        
        } catch (error) {
            console.log(error.message)
            
        }
    }

    return(  
        <div>
        <form onSubmit={handleSubmit}className='formgrid'>
        <div>
        <div className="border-box"></div>         
            <SearchBar userAuth={getSearchedVideos} />       
        </div>
        onChange={handleInputChange}
        </form>
        <Link to= "/videopage:video_Id">Vdiosd</Link>
        </div>
       
    )


}
export default SearchPage