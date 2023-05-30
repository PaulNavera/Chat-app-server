const Chat = require("../models/Chat");
const User = require("../models/User");

const createChat = async (reqBody) => {
  
  const {senderId, receiverId} = reqBody;


  try {

    const chat = await Chat.findOne({
      members: { $all: [senderId, receiverId]}
  })


  
  if(!chat){

    console.log(chat)
  const newChat = await new Chat({
    members: [senderId, receiverId],
  });

    const createdChat = await newChat.save()

    return createdChat; 
  }

    else{

      return false;

    }

     
  } 
  catch (error) {
    return error;
  }
};

const userChats = async (reqParams) => {
  try {
    const chat = await Chat.find({
      members: { $in: [reqParams.userId] }
    })
    
    return chat;

    
  } catch (error) {
    return error;
  }
};

 const findChat = async (reqParams) => {

  try {
    const chat = await Chat.findOne({
      members: { $all: [reqParams.senderId, reqParams.receiverId]}
    })

   
    return chat;
  } 
  catch (error) {
    return error;
  }
};

module.exports = {findChat, createChat, userChats}