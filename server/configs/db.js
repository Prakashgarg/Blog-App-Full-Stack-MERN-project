import mongoose from "mongoose";

const connectDB=async ()=>{
  try{
    mongoose.connection.on('connected', () => console.log("Database Connected"))
    await mongoose.connect(`${process.env.MONGODB_URL}/blogfullstackdata`)
  }
  catch(error){
    res.json({success:false, message:"db me error hai", message:error.message});
  }
}

export default connectDB;

// CLDDFCErY4uB2Upu
// CLDDFCErY4uB2Upu
// mongodb+srv://kumargargprakash:CLDDFCErY4uB2Upu@cluster0.8fd2ptr.mongodb.net/


