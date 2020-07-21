const express = require('express');
const router = express.Router();

const encuestasController = require('../controllers/encuestasController');

router.get('/prueba', (req, res) => {
    res.send('prueba');
});


router.post('/sendSurvey',encuestasController.sendSurvey);

router.get('/getSurveys',encuestasController.getSurveys);

module.exports = router;