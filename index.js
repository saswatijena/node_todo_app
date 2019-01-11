const express = require('express');
const app = express();

const port = process.env.port || 3000;

app.get('/', (req,res)=>{
    res.send('Hello I am going to be build into a bomb node todo app')
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})