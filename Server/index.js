const express = require("express");
const path = require("path");
const app = express();

/* app.use((req, res, next) => {
    if (req.hostname === 'lucangevare.nl') {
      return next();
    }
}); */

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../Client/index.html"))
})

app.use(express.static(path.join(__dirname, "../Client")))

app.get("/api/quotes", (req, res) => {
    const quotes = [
        "I need to stop procrastinating",
        "Why the heck did I make this",
        "I actually made 4 whole designs for this site and I'm still not satisfied",
        "Fun fact: This website has 5 subpages yet it has not 1 main page!",
        "Funny how one can have so much to do yet feel so bored",
        "Now if I were better at planning I would do a bit of programming and a bit of school a day. Instead, I do one whole week of school and another whole week of programming",
        "Please tell me why I thought it'd be a good idea to do this server-side",
        "This page took an hour to set-up",
        "It took longer for me to think of these \"funny\" quotes than to program the back-end and front-end to display them.",
        "I have made so many APIs it now takes me a total of 5 minutes to set-up another one"
    ]
    res.status(201).json({
        quote: quotes[Math.floor(Math.random() * quotes.length)],
        quotes: quotes
    })
})

app.listen(process.env.PORT || 3001, () => console.log(`Listening on port ${process.env.PORT || 3001}`))