import React, { useContext } from "react";
import { GlobalState } from "../../../GlobalState";
import FeedItem from "../feedItem/FeedItem";
import './feed.css'
import Loading from "../utils/loading/Loading"
const Feed = () => {
  const state = useContext(GlobalState);
  const [blogs] = state.blogsAPI.blogs;

  
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          {<Loading/> && blogs.map((element,index) => {
            return (<FeedItem key={element._id} props={element} />)
          }) }
        </div>
      </div>
    </>
  );
};

export default Feed;
