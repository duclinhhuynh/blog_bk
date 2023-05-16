const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteControllers');

router.get('/:slug', siteController.index);
router.get('/search', siteController.search);

module.exports = router;

// router.use('/search', siteControllers.show);
// router.use('/', siteControllers.index);