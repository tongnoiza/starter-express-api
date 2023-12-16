const express = require('express')
var cors = require('cors')
const app = express()
const port = process.env.PORT || 443
app.use(cors())
app.get('/', (req, res) => {
  console.log("รันบน port ",port)
    console.log("Just got a request!")
    res.send(req.body)
})
app.listen(port,()=>{
      console.log("รันบน port ",port)
})
