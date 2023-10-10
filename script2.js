// importa el modulo de htttp 

const http=require('http');

//crear el servidor http
const server=http.createServer((req, res)=>{
    res.writeHead(200,{'content-Type':'text/plain'
});

res.end('hola primer server NODE');
});
const port=3000;
server.listen(port,()=>{
    console.log('sevidor corriendo en el puerto ${port}')
});