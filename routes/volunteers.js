const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config();
const Volunteeer = require('../models/volunteer.js');

const jwtSecret = process.env.JWT_SECRET_TOKEN;
const router = express.Router();

module.exports = router;
