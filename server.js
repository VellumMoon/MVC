const express = require('express')
const app = express()
require('dotenv').config({ path:'./config/.env'})
const PORT = process.env.PORT

app.get('/', (req, res)=>{
    res.send('welcome to the homepage')
})
app.listen(PORT, () => {
    console.log(`running on http://localhost:${PORT}`);
})