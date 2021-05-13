const express = require('express');
const router = express.Router();

const axios = require('axios');
const config = require('./config');

router.get('/list-beacons', async (req, res) => {
  let endpoint;

  if (req.query.name) {
    // Search by name
    endpoint = `${config.beaconsApiRoot}/beacons/${req.query.name}`;
  } else if (req.query.activated) {
    // Show all activated
    endpoint = `${config.beaconsApiRoot}/beacons/status?activated=${req.query.activated}`;
  } else {
    // Show all
    endpoint = `${config.beaconsApiRoot}/beacons`;
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
