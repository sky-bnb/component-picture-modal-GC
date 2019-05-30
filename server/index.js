const express = require('express');
const cors = require('cors');
const db = require('../database/db.js');

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));

app.use(cors());

app.get('/house/:houseId', (req, res) => {
  console.log(req.params);
  db.House.findOne({ house_id: req.params.houseId }, (err, house) => {
    if (err) {
      res.status(404);
      res.send();
    } else {
      res.status(200);
      res.send(house);
    }
  });
});


module.exports = app;
