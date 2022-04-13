import {Post} from "../model/Post";

type BlogOverviewProps = {
    posts : Post[]
}

export default function BlogOverview({posts} : BlogOverviewProps ) {

    return <div> {  posts.map( post =>  <div>{ post.title }</div> )   } </div>
}
