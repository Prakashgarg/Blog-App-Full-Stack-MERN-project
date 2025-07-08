import fs from 'fs';
import imagekit from '../configs/imageKit.js';
import Blog from '../models/blog.js';
import { error } from 'console';

export const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, isPublished } = JSON.parse(req.body.blog); 
    const imageFile = req.file;

    // Check if all fields are present
    if (!title || !description || !category || !imageFile) {
      return res.json({ success: false,message:"blogController me error hai addblog ke try me", message: "Missing required fields" });
    }

    const fileBuffer = fs.readFileSync(imageFile.path);

    // Upload image to ImageKit
    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/blogs"
    });

    // Optimize image via ImageKit URL transformation
    const optimizedImageUrl = imagekit.url({
      path: response.filePath,
      transformation: [
        { quality: 'auto' },
        { format: 'webp' },
        { width: '1280' }
      ]
    });
   const image=optimizedImageUrl;
    await Blog.create({
      title,
      subTitle,
      description,
      category,
      image,
      isPublished
    });

    res.json({ success: true, message: "Blog added successfully" });

  } catch (error) {
    res.json({ success: false, message:"blogController me error hai addblog  ke catch me", error: error.message });
  }
};


export const getALLBlogs=async(req,res)=>{
  try{
    const blogs= await Blog.find({isPublished:true})
    re.json({success:true,blogs})
  }catch(error){
    res.json({success:false,message:"blogController me error hai getallblogs ke catch me",message:error.message})
  }
}

export const getBlogById= async(req,res)=>{
  try{
    const {blogId}=req.parse;
    const blog=await Blog.findById(blogId)
    if(!blogId){
      return res.json({sucess:false,message:"blogController me error hai get by id ke try me", message:"Blog not found"});
    }
    res.json({success:true,blog})
  }catch(error){
     res.json({success:false,message:"blogController me error hai blog by id ke catch me",message:error.message})
  }
}


export const deleteBlogById= async(req,res)=>{
  try{
    const {id}=req.body;
    await Blog.findByIdAndDelete(id);
  
    //delete comments also
    await Comment.deleteMany({blog:id});

    res.json({sucess:true, message:"Blog deleted successfully"});
    
  }catch(error){
     res.json({success:false,message:"blogController me error hai delete ke catch me",message:error.message})
  }
}

export const togglePublish= async(req,res)=>{
  try{
    const {id}=req.body;
    const blog = await Blog.findById(id);
    blog.isPublished=!blog.isPublished;
    await blog.save();

    res.json({sucess:true, message:'Blog status updated'})
    
  }catch(error){
     res.json({success:false,message:"blogController me error hai toggle ke catch me",message:error.message})
  }
}

export const addComment=async(req,res)=>{
  try{
    const {blog,name,content}=req.body;
     await Comment.create({blog,name,content});
     res.json({sucess:true,message:error.message});
  }
  catch(error){
    res.json({sucess:false,message:error.message});
  }
}

export const getBlogComments=async(req,res)=>{
  try{
    const {blogId}=req.body;
     const comments=await Comment.find({blog:blogId,isApproved:true}).sort({createdAt:-1});
  }catch(error){
    res.json({success:false,message:error.message});
  }
}

export const generateContent=async(req,res)=>{
  try {
      const {prompt}=req.body;
      const content=await main(prompt + 'Generate a blog content for this topic in simple text format')

      res.json({success:true,content})
  }catch (error) {
      res.json({success:false, message:error.message})
  }
}