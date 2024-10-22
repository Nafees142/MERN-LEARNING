const http = require ('http');

console.log('i was here')


const requestHandler = (req, res) =>{
    console.log('i was heare in handler' , req)
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head>')
    res.write('</head>')
    res.write('<body>')
    res.write('<h1> Hello WOrld </h1>')
    res.write('<body>')
    res.write('</html>')
}


const server = http.createServer(requestHandler);
const PORT = 3001
server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})




