const express = require("express")
const session = require("express-session")
const app = express()
const login = require("./routes/login")
const cors = require("cors")
const passport = require("passport")
const loginGoogle = require("./routes/LoginGoogle")


app.use(login)
app.use(cors())
app.use(express.json())
app.use(session({secret:'sunna'}))
app.use(passport.initialize())
app.use(passport.session())
app.use(loginGoogle)
require('./auth/Google')




app.get("/", (req, res) => {
    res.send(`<a href='/auth/google'>Auth</a>`)
})



app.get("/auth/failure", (req, res) => {
    res.send('smething went wrong...')
})





const PORT = process.env.PORT || 5000
app.listen(PORT , () => {
    console.log("SERVER LISTEN ON PORT : " +PORT)
})