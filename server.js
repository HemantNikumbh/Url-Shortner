const express = require('express');
const{connectToMongoDB} = require('./connection');
const URL = require('./model/url');
const urlRouter = require('./router/url');
const app = express();
app.use(express.json());
app.use('/url',urlRouter);
   
   app.get('/:shortId',async(req,res)=>{
    const shortId  = req.params.shortId;
   const entry =  await URL.findOneAndUpdate({
        shortId
    },{
        $push:{
            visitHistory:{
                timestamp:Date.now(),
            }
        }
    })
    res.redirect(entry.redirectUrl);
})

connectToMongoDB('mongodb://localhost:27017/url-shortner').then(()=>{
    app.listen(3000,()=>{
        console.log('Server is running on port 3000');
    });
});