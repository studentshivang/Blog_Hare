import React, { useContext, useState} from "react";
import axios from "axios";
import {GlobalState} from "../../../GlobalState";
// import { toast ,ToastContainer} from "react-toastify";
import Loading from "../utils/loading/Loading"
import {useNavigate,Link} from "react-router-dom";
import "./BlogPost.css"

const initialState = {
    title:"",
    author:"",
    paragraph:"",
    images:{},
}

function CreateProduct() {
    const state = useContext(GlobalState);
    const [blog,setProduct] = useState(initialState)
    const [images,setImages] = useState(false)
    const [loading,setLoading] = useState(false)
    const [callback,setCallback] = state.blogsAPI.callback; 

    const navigate = useNavigate();
   
    // console.log(param.id);
    // useEffect(()=>{
    //     alert(param.id);
    // },[])
    const handleUpload=async e =>{
        try {
            
            const file = e.target.files[0]
            console.log(file);

            if(file===null) return alert("File does not exist.")

            if(file.size > 1024*1024) //1mb
                return alert("Size too large")

            if(file.type !=="image/jpeg" && file.type!=="image/png") 
                return alert("File format is incorrect!")

            let formData= new FormData()
            formData.append('file',file)
            
            setLoading(true)
            const res = await axios.post('/api/uploadImage',formData,{
                headers:{'content-type':'multipart/form-data'}
            })
            setLoading(false)
            setImages(res.data);


        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const handleDestroy = async ()=>{
        try {
           
            setLoading(true)
            await axios.post('/api/destroy',{public_id:images.public_id})
            setLoading(false)
            setImages(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const handleChangeInput = (e)=>{
        const {name,value} = e.target;
        setProduct({...blog,[name]:value})
    }

    const handleSubmit=async e=>{
        e.preventDefault()
        try {
           
            // if(!images) return alert(`No image uploaded!`)

                await axios.post('/api/blogs',{...blog,images})
         
            setCallback(!callback);
            navigate('/');
        } catch (err) {
            alert(err.response.data.msg)
        }
    } 

    const styleUpload = {
        display:images?"block":"none"
    }
    
    return(
        <>
        <h1><Link to='/'><i className="fa fa-arrow-left btn btn-success mb-1 m-5" aria-hidden="true"></i></Link></h1>
        <div className="create_product my-5">
            
            <div className="upload">
                <input type="file" name="file" id="file_up" onChange={handleUpload}/>
                {
                    loading?<div id="file_img"><Loading/></div>
                    :<div id="file_img" style={styleUpload}>
                    <img src={images?images.url:''} alt="" />
                    <span onClick={handleDestroy}>X</span>
                </div>}
            </div>

            <form onSubmit={handleSubmit}>
                {/* <div className="row">
                    <label htmlFor="blog_id"><h4>Blog ID</h4></label>
                    <input type="text" name="blog_id" id="blog_id" required
                    value={blog.blog_id} onChange={handleChangeInput}/>
                </div> */}
                

                <div className="row">
                    <label htmlFor="title"><h4>Title</h4></label>
                    <input type="text" name="title" id="title" required placeholder="Blog Title"
                    value={blog.title} onChange={handleChangeInput}/>
                </div>
                
                <div className="row">
                    <label htmlFor="author"><h4>Author</h4></label>
                    <input type="text" name="author" id="author" required placeholder="Your Name"
                    value={blog.author} onChange={handleChangeInput}/>
                </div>

                <div className="row">
                    <label htmlFor="paragraph"><h4>Paragraph</h4></label>
                    <textarea type="text" name="paragraph" id="paragraph" required placeholder="Paragraph"
                    value={blog.paragraph} rows="7" onChange={handleChangeInput}/>
                </div>

                
                <button type="submit">Create</button>
            </form>
        </div>
        </>
    )
}

export default CreateProduct;