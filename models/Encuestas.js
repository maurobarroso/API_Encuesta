const db = require('../config/config');
const Sequelize = require('sequelize');


///// JSON 
/* {
    "usuario":"Pruebas",
    "valor":0,
    "detalle":[{"Pregunta":"¿Me recomendarias a un colega?", "value":4}],
    "objeto":"Flujo 1",
    "obs":"Una Observación",
    "empresaid":1038
} */

const Encuestas = db.define('encuestas', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usuario: {
        type: Sequelize.STRING(30)
    },
    empresa: {
        type: Sequelize.INTEGER
    },
    detalle: {
        type: Sequelize.STRING(150)
    },
    preguntas: {
        type: Sequelize.STRING(200)
    }
});

module.exports = Encuestas;