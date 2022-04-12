const express = require("express");

const courier = require("./courier");

const order = require("./order");

const router = express.Router();

// import and declare auth
router.use('/auth', auth);

// import and declare authMiddleware
router.use('/courier', authMiddleware, courier);
router.use('/orders', authMiddleware, order);

