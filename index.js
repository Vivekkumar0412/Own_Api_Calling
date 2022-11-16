let fs = require("fs");
let http = require("http");
let host = "localhost";
let port = process.env.PORT || 5000;

let server = http.createServer((req,res)=>{
    if(req.url == "/"){
        res.writeHead(200,{"content-Type":"text/html"})
        res.end("<h1>HI there it is home page</h1>")
    }else if(req.url == "/api"){
        res.writeHead(200,{"content-Type":"text/html"})
        fs.readFile("inde.json","utf-8",(err,ress)=>{
            let data = JSON.parse(ress);
            console.log(data[0].phone)
            res.end(data[0].phone);
        })
    }
})

server.listen(port,host,(err)=>{
    console.log(`my web server is http://${host}:${port}`)
})



