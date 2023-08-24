const http=require("http");
const fs=require("fs");
const path=require("path");
//Method One


// http.createServer((req,res)=>{
//     res.write("This Is Node Js");
//     console.log(req.url);
//     console.log("Test");
//     res.end();

// }).listen(3001,()=>console.log("Server is running"));

//Method 2


const server=http.createServer((req,res)=>{


    if(req.url==="/"){
        
   fs.readFile(path.join(__dirname,"Views","index.html"),"utf8",(err,data)=>{
    if(err) throw err;
    console.log(data);



    res.writeHead(200,{'Content-Type':"text/html"})
    
    res.end(data);

   });
    }
    if(req.url==="/contact"){

        
   fs.readFile(path.join(__dirname,"Views","contact.html"),"utf8",(err,data)=>{
    if(err) throw err;
    console.log(data);



    res.writeHead(200,{'Content-Type':"text/html"})
    
    res.end(data);

   });
    }



  

});


const PORT=process.env.PORT || 3001;

server.listen(PORT, ()=>console.log(`Server Running on port ${PORT}`));



