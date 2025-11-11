const express = 
require("express");
const userRouter = 
require('./routes/users');
const postRouter = 
require('./routes/posts');

const app = express();

app.set('view engine', 'ejs');

app.use('/users', userRouter);
app.use('/posts', postRouter);

app.get('/', (req,res)=>{
    console.log("Here!");
    res.render("index", {user: "Sushil!"});
    
});

app.listen(3030);