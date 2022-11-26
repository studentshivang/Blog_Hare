import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GlobalState } from "../../../GlobalState";
import Loading from "../utils/loading/Loading";

import './Blog.css';

export default function Blog() {
  const params= useParams();
  const state = useContext(GlobalState);
  // const [callback,setCallback] = state.blogsAPI.callback; 
  const [blogItem,setBlogItem]=useState([]);
  const [blogs] = state.blogsAPI.blogs;
  useEffect(()=>{  
    console.log(blogs);
      setBlogItem(blogs.filter((ele, index) => {
        return ele._id === params.id;
      }));
    },[blogs,params])
    console.log(blogItem);
    // let newDate = date.toLocaleDateString()+ " " + date.toLocaleTimeString();//prints expected format.
    if (blogItem.length===0) return <Loading/>;
    let date = new Date((blogItem[0].updatedAt?blogItem[0].updatedAt:blogItem[0].createdAt));
  // useEffect(()=>setBlogItem[blog[0]],[blogs]);
  return (
    <>
    <div className="container">
    <div className="row blogReal">
      <div className="py-auto my-2">
      <h1><Link to='/'><i className="fa fa-arrow-left btn btn-success mb-1" aria-hidden="true"></i></Link>  <span>{blogItem[0].title}</span></h1>
      </div>
    </div>
    <div className="row my-2 Date">
        <h6 className="text-uppercase" ><i>Published At : {date.toLocaleTimeString()}</i></h6>
        <h6><i>{date.toLocaleDateString()}</i></h6>
    </div>
    <div className="row my-2">
        <h6> - {blogItem[0].author}</h6>
    </div>
    <div className="row my-2">
        <img src={blogItem[0].images?blogItem[0].images.url:null} alt="" />
    </div>
    <div className="row my-5 col-12">
        <p>
            {blogItem[0].paragraph}
        </p>
    </div>
    </div>
    </>
  );
}
