const router = require('express').Router();
const chatControllers = require('../controllers/chatControllers')

router.post('/',(req,res)=>{
    chatControllers.createChat(req.body).then(result=>res.send(result))
});
router.get('/:userId',(req,res)=>{
    chatControllers.userChats(req.params).then(result=>res.send(result))
});

router.get('/find/:senderId/:receiverId',(req,res)=>{
    chatControllers.findChat(req.params).then(result=>res.send(result))
});

module.exports = router;