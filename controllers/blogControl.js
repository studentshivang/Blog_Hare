const Blogs = require("../models/blogModel");

const blogControl = {
  createBlog: async (req, res) => {
    try {
      console.log(req.body);
      const comingData = req.body;

      const newBlog = new Blogs({
        title: comingData.title,
        author: comingData.author,
        paragraph: comingData.paragraph,
        images: comingData.images,
      });

      await newBlog.save()

      res
        .status(200)
        .json({ success: true, msg: "Blog created successfully..." });
    } catch (err) {
      res.status(400).json({ success: false, err: err.message });
    }
},
getBlogs:async(req,res)=>{
    try {
        const blogs = await Blogs.find().sort({createdAt:-1});
        // console.log(blogs);

        res.status(200).json({success:true,blogs})
    } catch (err) {
        res.status(400).json({ success: false, err: err.message });
        
    }
  },
  deleteBlog:async(req,res)=>{
    try {
        const id= req.params.id;
        const blog = await Blogs.findByIdAndDelete(id);
        // console.log(blogs);

        res.status(200).json({success:true,blog,msg:"Deleted!"})
    } catch (err) {
        res.status(400).json({ success: false, err: err.message });
        
    }
  }
};

module.exports = blogControl;
