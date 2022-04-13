import './App.css';
import Title from "./components/Title";
import BlogOverview from "./components/BlogOverview";


const postResponse = [
    {"id": 1, "title": "Schöne Angel-Touren", "author": "Ernst Hemmingweg", "text": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero!"},
    {"id": 2, "title": "Meine liebsten Schenkelklopfer", "author": "Steffen König", "text": "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr!"},
    {"id": 3, "title": "MacBeff", "author": "Wilhelm Wackelschippe", "text": "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis."},
    {"id": 4, "title": "Karrieretips", "author": "Franz Kafka", "text": "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis."}
]


export default function App() {
  return (

    <div className="App">

       <Title />
       <BlogOverview posts={postResponse} />

    </div>
  );
}
