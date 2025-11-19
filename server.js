const express = require("express");
const userRouter = require('./routes/users')
const app = express(); //Calling this function sets up a server
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use('/users', userRouter);
app.use('/posts', postRouter);


app.get('/', (req, res)=>{
    console.log("Here");
    res.render("index", {user: "Sushil!"});
    
}); // this function will run when someone goes to the root folder
app.get('/users', (req, res)=>{
    res.send('User List');
});
app.get('/users/new', (req, res)=>{
    res.send('New User Form');
});



app.listen(3030);

function logger(req, res, next){
    console.log(`Page Accessed: ${req.originalUrl}`);
    next();
    
}

