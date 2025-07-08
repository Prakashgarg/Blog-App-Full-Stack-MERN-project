import express from 'express';
import auth from '../middleware/auth.js';
import { adminLogin, approveCommentById, deleteCommentById, getAllBlogAdmin, getAllComments, getDashboard } from '../controllers/adminController.js';

const adminRouter = express.Router();

adminRouter.post('/login', adminLogin);
adminRouter.get("/comments",auth,getAllComments);
adminRouter.get("/blogs",auth,getAllBlogAdmin);
adminRouter.get("/delete-comment",auth,deleteCommentById);
adminRouter.get("/approve-comment",auth,approveCommentById);
adminRouter.get("/dashboard",auth,getDashboard);

export default adminRouter;