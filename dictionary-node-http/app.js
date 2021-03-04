
const http = require('http');
const queryParser =require('./parseQuery');
const fs = require('fs');
const data = fs.readFileSync('./dictionary.rtf')


const server = http.createServer((req,res, err) => {
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.write("dictionary");
    res.end();

 // url=req.url;
//console.log(data)

 const [url,query] = req.url.split('?');
 console.log(url);

 if(query){
     //
     req.query=queryParser(query); // we save the query onto the 'req.query'property

 }

console.log(req.query);
console.log(err);

if ( url === '/'){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(`
    <main>
    <h1>Welcome to our app</h1>
    </main>
    
    `)
    return res.end();

   
}





// if( url === '/welcome'){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(`
//     <main>
//     <h1>Welcome to our app</h1>
//     </main>

//     `)
// }
//     return res.end();

})


const PORT = 3000;
const DOMAIN = 'localhost';

server.listen(PORT,DOMAIN, ()=>{
    console.log('listening on port' + PORT);
});