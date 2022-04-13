import {Post} from "../model/Post";
import './PostCard.css'

type PostCardProps = {
    post : Post
}

export default function PostCard( {post} : PostCardProps ){

    return <div className={"post-card"}>
                 <h2> {post.title} </h2>
                 <p> {post.text} </p>
                 <p className={"author"}> Author: {post.author} </p>
            </div>
}