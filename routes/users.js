const express = 
require('express');

const router = 
express.Router();

router.get('/', (req, res)=>{
    res.render('users/list', {users:users});
});
router.get('/new', (req, res)=>{
    res.render('users/new', {firstName: "Please enter your name"});
});
router.post('/', (req, res)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const age = req.body.age;
    const gender = req.body.gender;
    
    const isValid = firstName !=="";
    if(isValid)
    {
        console.log(`Adding User: ${firstname}`);
        users.push({
            firstname: firstName,
            lastName: lastName,
            gender: gender,
            age: age,
        });
        console.log(`New Set of Users: ${users}`);
        res.send("User Created!");
    }
    else{
        console.log("Error adding user!");
        res.render("users/new", {firstName: firstName});
        
    }
    
});
//router.get(':/id', (req, res)=>{
   /// res.send(`Getting User Data: ${req.params.id}`);
//});
router.route("/:id").get((req, res)=>{
    res.send(`Getting User Data: ${req.params.id}`);
}).delete((req, res)=>{
    res.send(`Deleting user with id: ${req.params.id}`);
}).put((req, res)=>{
    res.send(`Updating user with id: ${req.params.id}`);
});
const users = [];



router.param("id", (req, res, next, id)=>{
    console.log(`Accessing user #${id}`);
    next();
});
module.exports = router;