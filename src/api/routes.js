const { Router } = require('express');
const router = Router();

const { createShortUrl } = require('./controllers');

router.post('/url', createShortUrl);



module.exports = router;
