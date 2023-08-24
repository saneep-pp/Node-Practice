const eventEmitter=require("events");

const emitter=new eventEmitter;
emitter.on("message",(data)=>{
    console.log(data.text)
})
emitter.on("logout",(data)=>{
    console.log(data.text)
})
emitter.emit("message",{text:"User Logged"});
emitter.emit("message",{text:"User went to  about page"});
emitter.emit("logout",{text:"User Loggout"});