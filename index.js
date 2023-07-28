const express = require("express")

const app = express()
const PORT = 4000

app.get("/api/getdata",(req,res) => {
    res.send("Hello world!!")
})

app.listen(PORT,() => {

    console.log("My server is listening to the port 4000")

} )
