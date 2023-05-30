const User = require("../models/User");

const searchUser = async ({search, userId})=>{

    try{

    const keyword = search?
    {
        $or: [
          { name: { $regex: search, $options: "i" } },
          
        ],
      }
    : {};


    const user = await User.find(keyword).find({ userId: { $ne: userId} });


    return user;

    }

    catch (error){

        return error;
    }

    

   
}

const getUser = async(reqParams)=>{

    try{
        const user = await User.findOne({userId:reqParams.userId});

        return user
    }

    catch(error){

        return error;

    }
    


}
const getAllUsers = async(userId)=>{

    try{
        const user = await User.find({ userId: { $ne: userId} });

        return user
    }

    catch(error){

        return error;

    }
    


}

const saveUser = async (reqBody) => {

    const { userId, name, email, pic } = reqBody;
  
   try{

    const userExists = await User.findOne({ email });
  
    if (userExists) {
      return false
    }
  
    const newUser = await new User({
      userId,
      name,
      email,
      pic
    });
  
    const user = await newUser.save()

    return user;
  }
  catch(error){

    return error;
   } 
   
  }


module.exports = {searchUser, getUser, getAllUsers, saveUser};