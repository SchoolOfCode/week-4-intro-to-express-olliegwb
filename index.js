import express from "express"; //this is importing express framework from the express package so that the code below actually does something.
const app = express() //declare a variable that uses express framework. express() sets up a server for you which you are storing in app.
const port = 3000 //setting the port to this number. This is what is being listened to.

app.get('/', (req, res) => { //defines a get route. The two parameters are the request and the response. We are telling the server to send "hello world" as a response.
  res.send('Hello World!')
})

/* app.get('/test', (req, res) => { //defines a get route. The two parameters are the request and the response. We are telling the server to send "hello world" as a response.
    res.send('test')
  }) */

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) //telling the app to listen for the specific port, and then a function telling it to console.log "example app listening on port ${port}"


// GET: Retrieve data.
// POST: Send data to create/update.
// PUT: Replace or create a resource.
// PATCH: Partially update a resource.
// DELETE: Remove a resource.
// HEAD: Retrieve metadata only.
// OPTIONS: Check supported methods.
// CONNECT: Establish secure communication.
// TRACE: Debug request paths.