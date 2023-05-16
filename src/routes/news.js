const express = require('express');
const router = express.Router();

const newControllers = require('../app/controllers/NewControllers');

// newsControllers.index

router.get('/', newControllers.index);
router.get('/:slug', newControllers.show);

module.exports = router;
