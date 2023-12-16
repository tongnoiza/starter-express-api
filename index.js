const express = require('express')
var cors = require('cors')
const app = express()
const port = process.env.PORT || 443
app.use(cors())
app.get('/', (req, res) => {
 let q =  req.query
  console.log("รันบน port ",port)
    console.log("query ",q)
    res.send(q)
})
app.listen(port,()=>{
      console.log("รันบน port ",port)
})
