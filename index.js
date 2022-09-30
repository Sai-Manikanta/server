const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        name: 'MANI'
    })
})

const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`http://localhost:${port}`))
