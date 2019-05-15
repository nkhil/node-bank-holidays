const rp = require('request-promise');
const express = require('express');
const router = express.Router();
const controller = require('../controllers/holidays');
const { catchErrors } = require('../handlers/errorHandlers');

/* GET home page. */
router.get('/', catchErrors(controller.listAllHolidays));

router.get('/future', catchErrors(controller.futureHolidays));

module.exports = router;
