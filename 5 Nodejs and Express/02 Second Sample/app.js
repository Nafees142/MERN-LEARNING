const http = require('http')
const fs = require('fs')


const requestHandler = ((req,res) =>{
    res.setHeader('Content-Type', 'text/html')

if(req.url === "/"){
    res.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
         
            <title>NODE</title>
        </head>
        <body>
            <h1>Node Js Learning</h1>
            <form action="/buy-product" method="POST">
                <input type="text" name="product" placeholder="enter product name" id="">
                <input type="text" name="price" placeholder="enter product price" id="">
                <input type="submit" value="submit">
            </form>
        </body>
        </html>`)
}
    else if (req.url === "/buy-product"){
        const buffer =[];
        req.on('data', (chunk)=>{
            console.log(chunk)
            buffer.push(chunk)
        });
        req.on('end' , ()=>{
            const body = Buffer.concat(buffer).toString();
            console.log(body)
        })
        fs.writeFileSync('test.txt' , 'myntra app');
        res.statusCode = 302;
        res.setHeader('Location' , '/products')
    }

    else if (req.url === '/products'){
        res.write(`<!DOCTYPE html>
            <html lang="en">
            <head>
             
                <title>NODE</title>
            </head>
            <body>
                <h1>Products will appear here</h1>
                
            </body>
            </html>`)

    }
    else {
        res.statusCode = 404;
        res.write(`<!DOCTYPE html>
            <html lang="en">
            <head>
             
                <title>404</title>
            </head>
            <body>
                <h1>404 Page Not Found</h1>
                
            </body>
            </html>`)
    }
res.end();
})



const server = http.createServer(requestHandler)

const PORT = 3000

server.listen(PORT, ()=>{
    console.log('server is running on port ' , PORT)
})