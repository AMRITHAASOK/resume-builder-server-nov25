// 1 import json server 
const jsonServer = require('json-server')

//2 create an app using json server

const rbuilderServer = jsonServer.create()

//3 creating a router for your JSON Server 

const router = jsonServer.router('db.json')

// 4 creating a middleware used for parsing json - js

const middleware = jsonServer.defaults()

//5 define port 
const PORT = 3000 

//6  This means that any incoming HTTP requests to your server will go through these middlewares and be handled by the router.
rbuilderServer.use(middleware)
rbuilderServer.use(router)

//7 server is up and running, it logs a message to the console indicating that the JSON server is listening on the specified port
rbuilderServer.listen(PORT,()=>{
    console.log("Resume Builder server running on the port",PORT); 
})


