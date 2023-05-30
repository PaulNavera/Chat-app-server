const router = require('express').Router();
const messageControllers = require('../controllers/messageControllers');


router.post('/',(req,res)=>{

    messageControllers.sendMessage(req.body).then(result=>res.send(result))

});

router.get('/:chatId',(req,res)=>{

    messageControllers.getMessages(req.params).then(result=>res.send(result))

});

module.exports = router;