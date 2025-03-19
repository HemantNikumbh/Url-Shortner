const express = require('express');
const { handleGenerateNewShortId } = require('../controller/url');
const router = express.Router();

router.post('/', handleGenerateNewShortId);

module.exports = router;