const http = require('http');


const requestHandler = ( (req, res) => {
    console.log('in requestHandler')
    res.setHeader('Content-Type', 'text/html')
    
    if(req.url === '/'){
        res.write(`
            <h1>Welcom To MERN Calculator</h1>
            <p>to perform calculation click on the below button</p>
            <a href = "/calculator"> Calculate Now</a>
            `)
    }
    else if(req.url === '/calculator'){
        res.write(`
            <form action="/calculate-result" method="POST">
                    <input type="text" name="val-one" placeholder="Enter Value" id="val-one">
                    <input type="text" name="val-two" placeholder="Enter Value" id="val-two">
                    <input type="submit" value="Add">
                </form>
            `)
    }
    else if(req.url === '/calculate-result'){
        let body = '';

        req.on('data' , (chunk) =>{
            body += chunk.toString();
            
        });
        req.on('end' , () =>{
            const parsedData = new URLSearchParams(body)
            const valOne = parseFloat(parsedData.get('val-one'))
            const valTwo = parseFloat(parsedData.get('val-two'))


            if(!isNaN(valOne) && !isNaN(valTwo)) {
                const result = valOne + valTwo;
                res.write(`
                        <!DOCTYPE html>
                        <html lang="en">
                        <head>
                        
                            <title>NODE</title>
                        </head>
                        <body>
                            <h1>Node Js Learning</h1>
                            <h2>Result</h2>
                        </body>
                        </html>
                     `)
                     
                console.log(result)
                res.end();


            }
            else{
                res.write( `<h1> Invalid Input</h1>`)
                res.end();
            }

                
        })
       
        
    }

    else{
        res.statusCode = 404;
        res.write(`<h1>404 page not found</h1>`)
    }
    res.end();
        
       
})


const PORT = 3000;
const server = http.createServer(requestHandler);

server.listen(PORT, ()=> {
    console.log(`server is running on port ${PORT}`)
})