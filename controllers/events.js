const express = require('express');
const verifyToken = require('../middleware/verify-token.js');
const isAdmin = require ('../middleware/is-admin.js');
const Event = require('../models/event.js');
const User = require('../models/user.js');
const router = express.Router();

router.post('/', verifyToken,isAdmin,async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
