const { Router } = require('express');
const router = Router();

const { createShortUrl } = require('./controllers');

router.get('/', createShortUrl);

module.exports = router;
