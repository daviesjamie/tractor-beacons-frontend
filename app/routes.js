const express = require('express');
const router = express.Router();

const axios = require('axios');
const config = require('./config');

router.get('/list-beacons', async (req, res) => {
  let endpoint = `${config.beaconsApiRoot}/beacons`;

  if (req.query.name) {
    endpoint = `${endpoint}/${req.query.name}`;
  } else if (req.query.activated) {
    endpoint = `${endpoint}/status?activated=${req.query.activated}`;
  }

  try {
    console.log(`GET ${endpoint}`);
    const response = await axios.get(endpoint);
    beacons = response.data;
  } catch (error) {
    return res.status(500).render('list-beacons.html', { error });
  }

  res.render('list-beacons.html', { beacons: beacons });
});

module.exports = router
