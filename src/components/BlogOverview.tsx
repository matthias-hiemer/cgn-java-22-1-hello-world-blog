import {Post} from "../model/Post";
import './BlogOverview.css'
import PostCard from "./PostCard";

type BlogOverviewProps = {
    posts : Post[]
}

export default function BlogOverview({posts} : BlogOverviewProps ) {

    return <div className={"blog-overview"}> {  posts.map( post => <PostCard post={post} /> )  } </div>
}
