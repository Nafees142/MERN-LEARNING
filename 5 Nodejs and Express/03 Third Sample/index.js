const http = require('http');
const fs = require('fs')

const requestHandler = ((req, res) =>{
    console.log('in request handler')
    res.setHeader('Content-Type', 'text/html')

    if(req.url === '/'){
        res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
            
                <title>NODE</title>
            </head>
            <body>
                <h1>Node Js Learning</h1>
                <form action="/buy-product" method="POST">
                    <input type="text" name="product" placeholder="enter product name" id="">
                    <input type="text" name="price" placeholder="enter product price" id="">
                    <input type="submit" value="sumit">
                </form>
            </body>
            </html>`)
    }
    else if(req.url === '/buy-product'){
        res.statusCode = 302;
        res.setHeader('Location', '/products')

        fs.writeFileSync ('output.txt', 'product details')

        
    }
    else if(req.url === '/products'){
        res.write('<h1>Product will appear here</h1>')
    }
    else{
        res.statusCode = 404;
        res.write('<h1>404 page not found</h1>')
    }
    
    res.end();
})

const server = http.createServer(requestHandler);

const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`server is listening on ${PORT}`)
})