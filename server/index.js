const express = require('express');
const mongoose = require('mongoose');
const House = require('../database/index.js');

const app = express();
const port = 3002;

app.use(express.static(`${__dirname}/../client/dist`));

mongoose.connect('mongodb://localhost/house');

app.get('/house/:houseId', (req, res) => {
  House.findOne({ house_id: req.params.houseId }, (err, house) => {
    if (err) {
      res.status(404);
      res.send();
    } else {
      res.status(200);
      res.send(house);
    }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
