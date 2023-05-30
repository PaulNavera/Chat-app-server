const Message = require("../models/Message");

const sendMessage = async (reqBody) => {
  const { chatId, senderId, message } = reqBody;

  const newMessage = await new Message({
    chatId,
    senderId,
    message
  });

  try {
    const result = await newMessage.save()

    return result;
  } 
  catch (error) {
    return error;
  }
};

const getMessages = async (reqParams) => {
  const { chatId } = reqParams;
  try {
    const result = await Message.find({ chatId })

    return result;
  }
  catch (error) {
    return error;
  }
};


module.exports = {getMessages,sendMessage}