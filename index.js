const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.all('/', (req, res) => {
    console.log("req ",req.query)
    console.log("Just got a request!")
    res.send('Yo!')
})
app.listen(port,()=>{
      console.log("รันบน port ",port)
})
