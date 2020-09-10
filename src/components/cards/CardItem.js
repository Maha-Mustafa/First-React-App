import React, { Component } from 'react'
import Likebtn from '../Likebtn/LikeBtn';
export default function CardItem(props) {
    return (
        <div className="info-display">
            <h1>{props.item.title}</h1>
            <img src={props.item.imgUrl} alt={props.item.title}/>
            <p>{props.item.text}</p>
            <Likebtn/>
            {/* <button><i class="fas fa-heart"></i></button> */}
        </div>
    )
}

