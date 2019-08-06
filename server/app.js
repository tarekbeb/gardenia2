const jwt = require('jwt-simple');
const express = require('express');
const app = express();

app.use(require('./routes/Authentication'))
app.use(require('./routes/collection'))
app.use(require('./routes/wishlist'));


app.listen('3001', (req, res)=>{
    console.log('listening on port 3001')
});

