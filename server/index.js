const express = require('express');
const mongoose = require('mongoose');
const House = require('../database/db.js');

const app = express();
const port = 3002;

app.use(express.static(`${__dirname}/../client/dist`));

app.get('/house/:houseId', (req, res) => {
  console.log(req.params)
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

app.listen(port, () => console.log(`App listening on port ${port}!`));
