const express = require("express")
const app = express()
const login = require("./routes/login")


const PORT = process.env.PORT || 5000

app.use(login)

app.listen(PORT , () => {
    console.log("SERVER LISTEN ON PORT : " +PORT)
})