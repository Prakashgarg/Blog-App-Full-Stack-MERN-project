import express from 'express';
import { addBlog,generateContent, getALLBlogs, getBlogById,deleteBlogById, togglePublish, addComment, getBlogComments } from '../controllers/blogController.js';
import upload from '../middleware/multer.js'; // Destructuring single middleware
import auth from '../middleware/auth.js';

const blogRouter = express.Router();

blogRouter.post('/add', upload.single('image'), auth, addBlog);
blogRouter.get('/all', getALLBlogs);
blogRouter.get('/:blogId', getBlogById);
blogRouter.post('/delete', deleteBlogById);
blogRouter.post('/toggle-publish', auth,togglePublish);

blogRouter.post('/add-comment',addComment);
blogRouter.post('/comments',getBlogComments);
blogRouter.post('/generate',auth,generateContent);


export default blogRouter;
