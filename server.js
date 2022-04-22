const http = require("http")
const fs = require("fs")


const server = http.createServer((req,res)=>{
    if(req.url ==="/"){
        res.writeHead(200, 
            { 'Content-Type': 'text/html' });
           const home = fs.readFileSync("./homepage.html","utf-8")
           res.write(home)
             res.end()
    }if(req.url ==="/about"){
        res.writeHead(200, 
            { 'Content-Type': 'text/html' });
           const about = fs.readFileSync("./about.html","utf-8")
           res.write(about)
        res.end()
    }if(req.url ==="/contact"){
        res.writeHead(200, 
            { 'Content-Type': 'text/html' });
           const contact = fs.readFileSync("./contact.html","utf-8")
           res.write(contact)
        res.end()
    }if(req.url ==="/home"){
        res.writeHead(302, {'Location': '/'});
        res.end();
    }
    

   
})
server.listen(5000)