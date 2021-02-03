const express = require("express")
let app = express()
const port = 3000


app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.static('public'))
app.use('/css', express.static(__dirname+ 'public/css'))
app.use('/css', express.static(__dirname+ 'public/img'))

app.get('/', (req,res)=>{
    res.render("home.ejs")
})

app.get('/about', (req,res)=>{
    res.render("about.ejs")
})

app.get('/gutter-cleaning', (req,res)=>{
    res.render("gutter.ejs")
})

app.get('/roof-cleaning', (req,res)=>{
    res.render("roof.ejs")
})

app.get('/roof&gutter-cleaning', (req,res)=>{
    res.render("both.ejs")
})

app.get('/pricing', (req,res)=>{
    res.render("pricing.ejs")
})

app.get('/contact', (req,res)=>{
    res.render("contact.ejs")
})



app.listen(port, () => console.info('Listening to port 3000'))