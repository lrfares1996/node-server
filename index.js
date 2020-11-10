const http = require('http')

const host = process.env.host || '0.0.0.0'
const port = process.env.PORT || 3002

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('<style>\
    * {\
        color: lightblue;\
        background-color: darkblue;\
        font-family: Arial;\
    }\
    </style>\
    <h1>Hey there! I am Lindsey!</h1><br><h2>This is a demo. This is our future!</h2><br><h3>This is so neat!</h3>')
})

server.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}/`)
})