const express = require('express')
const app = express()
const port = process.env.PORT || 443

app.all('/', (req, res) => {
  console.log("รันบน port ",port)
    console.log("Just got a request!")
    res.send('Yo!')
})
app.listen(port,()=>{
      console.log("รันบน port ",port)
})
