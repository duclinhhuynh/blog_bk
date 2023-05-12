const express = require('express');
const router = express.Router();

const newsControllers = require('../app/controllers/NewsControllers');

router.use('/search', SiteControllers.show);
router.use('/', SiteControllers.index);

module.exports = router;