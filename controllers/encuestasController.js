const Sequelize = require('sequelize');
const Encuestas = require('../models/Encuestas');

exports.sendSurvey = (req, res) => {
    try {
        let { usuario, empresa, detalle, preguntas } = req.body;

        let questions = JSON.stringify(preguntas);

        Encuestas.create({
            usuario,
            empresa,
            detalle,
            preguntas: questions
        })

        res.status(200).json({message: "Creado!"});

    } catch (error) {
        res.status(500);
    }

}


exports.getSurveys = (req,res) => {
    
}