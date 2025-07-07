
const http=require('http');
http.createServer( (req, res)=>{
    res.write("hello from node ");
    res.end();
}).listen(3000);
