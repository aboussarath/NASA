const express = require('express')
const app = express()
const port = 3000


app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(express.static(__dirname + '/../dist/NASA'));

// app.get('/', (req, res) => {
//   console.log(__dirname + '/dist/NASA')
//   res.json({message: 'Hello NASA!'})
// })

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})