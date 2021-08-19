const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 5000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/log', (req, res) => {
    const video = req.body;

    // Input validation
    if(!video.v_id) return res.status(400).send({ message: 'Video ID is missing'});
    if(!video.title) return res.status(400).send({ message: 'Video title is missing'});

    // Write in file
    fs.appendFile('log.txt', JSON.stringify(video), function (err) {
      if (err) return res.status(400).send({ message: 'Error while writing in a file'});
      return res.sendStatus(200);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));