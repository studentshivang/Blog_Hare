import React from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "./feed/Feed";
import Blog from "./blog/Blog";
import BlogPost from './blogPost/BlogPost';
import NotFound from "./utils/not_found/NotFound";

const Pages=()=>{
    return(
        <Routes>
            <Route path="/" element={<Feed/>} />
            <Route path='/blog/:id' element={<Blog/>} />
            <Route path='/postBlog' element={<BlogPost/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
}

export default Pages;