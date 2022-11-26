import React from "react";
import { Link } from "react-router-dom";
import './feedItem.css';

// const FeedItem = ({props})=>{
//     return(
//     <div className="card my-3 mx-auto" style={{"width":"18rem"}}>
//             <img src={(props.images)?props.images.url:"https://res.cloudinary.com/dltqjc99w/image/upload/v1659199740/blogs/pexels-edgar-santana-12576758_exia9c.jpg"} className=" card-img" alt="..." />
//             <div className="card-img-overlay">
//               <p className="card-text text-justify">
//                 {props.title}
//               </p>
//             </div>
//           </div>)
// }

const FeedItem = ({ props }) => {
  return (
    <>
      <div className="card mx-auto my-4 card_bor_rad" style={{ width: " 18rem" }}>
      <Link to={`/blog/${props._id}`}>
        <img
          src={
            props.images
              ? props.images.url
              : "https://res.cloudinary.com/dltqjc99w/image/upload/v1659199740/blogs/pexels-edgar-santana-12576758_exia9c.jpg"
          }
          className="card-img-top"
          alt="blogItem Pic"
        />
        </Link>
        <div className="card-body">
          <p className="card-text">
            <Link to={`/blog/${props._id}`}>
            {props.title}
            </Link>
            </p>
        </div>
      </div>
    </>
  );
};

export default FeedItem;
