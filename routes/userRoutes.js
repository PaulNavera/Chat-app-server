const router = require('express').Router();
const userControllers = require('../controllers/userControllers')

const userId =  "645fc34a3ebb1858782112ff"

router.post("/", (req,res)=>{

    userControllers.searchUser(req.body).then(result=>res.send(result))
})

router.get("/:userId", (req,res)=>{

    userControllers.getUser(req.params).then(result=>res.send(result))
})



router.get("/all/:userId", (req,res)=>{

    userControllers.getAllUsers(req.params).then(result=>res.send(result))
})


router.post("/save",(req,res)=>{

    userControllers.saveUser(req.body).then(result=>res.send(result))
})


module.exports = router;