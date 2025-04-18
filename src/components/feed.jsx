import React, { useState } from "react";
import './feed.css'

export default function Feed(){
    const [ likes , setLikes ] = useState(0);
    const [liked , setLiked ] = useState(false);
    const increase = ()=>{
        if(!liked){
        setLikes(likes + 1);
        }
        else{
        setLikes(likes - 1);
        }
        setLiked(!liked);
    };

    const p = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas at pariatur sunt"+
     "nihil asperiores dolorum iusto laudantium! Obcaecati eum non voluptates accusantium laboriosam officiis"+
      "autem eius, asperiores impedit eos fugit provident adipisci! Ab repellendus provident ipsum? Est quas nos"+
      "trum quae exercitationem nisi illum, perferendis tempore reiciendis dolor, repellat doloremque"+
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas at pariatur sunt"+
     "nihil asperiores dolorum iusto laudantium! Obcaecati eum non voluptates accusantium laboriosam officiis"+
      "autem eius, asperiores impedit eos fugit provident adipisci! Ab repellendus provident ipsum? Est quas nos"+
      "trum quae exercitationem nisi illum, perferendis tempore reiciendis dolor, repellat doloremque"+"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas at pariatur sunt"+
     "nihil asperiores dolorum iusto laudantium! Obcaecati eum non voluptates accusantium laboriosam officiis"+
      "autem eius, asperiores impedit eos fugit provident adipisci! Ab repellendus provident ipsum? Est quas nos"+
      "trum quae exercitationem nisi illum, perferendis tempore reiciendis dolor, repellat doloremque"

      const arr = [
        "masala",
        "vegetable",
        "rice",
        "oil",
        "chicken",
        "pepper",
        "salt",
        "turmeric",
        "onion",
        "garlic",
        "ginger",
        "tomato",
        "potato",
        "paneer",
        "ghee",
        "coriander",
        "green chili",
        "mustard seeds",
        "cumin",
        "curd"
      ];
      

      const name = "Mr.dot"

      console.log(likes);
    return(
        <div className="main">
            
            <div className="image">

                {/* put header for user name and profile */}
            <div className="head">
                {/* <img className="userima" src="./user.png" alt="" /> */}
                <p className="user">{name}</p>
                </div>

                {/* To display the contents in the collection in image format */}
                <img className="feedima" src="./logo192.png" alt="" />

                {/* Shows likes and comments */}
                <div className="like">
                <div style={{cursor : "pointer", color:liked ? "red" : "black"}} onClick={increase}>❤ {likes} likes
                </div>
                <p style={{paddingLeft:"20px",paddingTop:"2.5px",cursor:"pointer"}}><i class='bx bx-comment-dots'></i>Comments</p>
                </div>
               
            </div>
            <div className="desc">
                <h1>Ingredients</h1>
                <ul>
                    {arr.map((arr,index)=>(
                        <li key={index}>{arr}</li>
                    ))}
                </ul>
                <br />
                <p style={{paddingTop : '5px' }}>
                    <h2 style={{paddingBottom : '15px' }}>Description</h2>
                    {p}</p>
            </div>
        </div>
    )
}