const http = require("http")
const fs = require("fs")
const res = require("express/lib/response")
const express = ("express")
const app = express()


// const server = http.createServer((req,res)=>{
//     if(req.url ==="/"){
//         res.writeHead(200, 
//             { 'Content-Type': 'text/html' });
//            const home = fs.readFileSync("./homepage.html","utf-8")
//            res.write(home)
//              res.end()
//     }if(req.url ==="/about"){
//         res.writeHead(200, 
//             { 'Content-Type': 'text/html' });
//            const about = fs.readFileSync("./about.html","utf-8")
//            res.write(about)
//         res.end()
//     }if(req.url ==="/contact"){
//         res.writeHead(200, 
//             { 'Content-Type': 'text/html' });
//            const contact = fs.readFileSync("./contact.html","utf-8")
//            res.write(contact)
//         res.end()
//     }if(req.url ==="/home"){
//         res.writeHead(302, {'Location': '/'});
//         res.end();
//     }
    

   
// })
// server.listen(5000)
app.get("/",(req,rs)=>{
    res.sendFile(__dirname+"/homepage.html")
})
app.get("/contact",(req,rs)=>{
    res.sendFile(__dirname+"/contact.html")
})
app.get("/about",(req,rs)=>{
    res.sendFile(__dirname+"/about.html")
})
app.get("/home",(req,rs)=>{
    res.redirect("/")
})

app.listen(5000,()=>{
    console.log("app is listening on port 5000....")
})