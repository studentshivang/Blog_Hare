import { useEffect, useState } from "react";
import axios from "axios";

function BlogAPI() {
  const [blogs, setBlogs] = useState([]);
  const [callback, setCallback] = useState(false);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const blogs = await axios.get("/api/blogs");
        setBlogs(blogs.data.blogs);
      } catch (error) {
        console.log(error.response.data.msg);
      }
    };
    getBlogs();
  }, [callback]);

  return {
    blogs: [blogs, setBlogs],
    callback:[callback, setCallback]
  };
}

export default BlogAPI;