const express= require('express')
const app= express()
//middleware:
const offline= (req, res, next)=> {
    var date = new Date();
    if(date.getDay > 0 && date.getDay < 6 && date.getHours() > 9 && date.getHours < 17){
        next();
    }else{
        res.redirect('/offlinepage');
    }
 next()
};
//routes
app.get('/',offline, (req, res)=>{
    res.sendFile(__dirname + '/public/index.html')
})
app.get('/services', offline,(req, res)=>{
    res.sendFile(__dirname + '/public/services.html')
})
app.get('/contacts', offline,   (req, res)=>{
    res.sendFile(__dirname + '/public/contact.html')
})
app.get('/offlinepage', offline, (req,res)=>{
    res.sendFile(__dirname + '/public/offline.html')
})
//css file
app.get('/css/style.css', (req,res)=>{
    res.sendFile(__dirname +'/public/css/style.css')
})
const port= 5000
app.listen(port, ()=>{
    console.log(`server running on port: ${port}`)}
)