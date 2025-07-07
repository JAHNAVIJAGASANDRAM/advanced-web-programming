console.log(" hello");
const os =require('os');
const http=require('http');
http.createServer((req,res)=>{
    res.write("hello from node js");
    res.end();
});

console.log("Hostname",os.hostname());
console.log("freememory",os.freemem());
console.log("Architecture",os.arch());
console.log("Release",os.release());
console.log("Uptime",os.uptime());
console.log("totalmemory",os.totalmem());
console.log("userinfo",os.userInfo());
