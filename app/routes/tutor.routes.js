const express = require('express');
const router = express.Router();
const TutorController = require('../controllers/TutorController.js');
const authMiddleware = require('../middlewares/isAutenticado.js');


//retorna todos os tutores
router.get('/tutor', [authMiddleware.check], TutorController.findAll);

//recupera um tutor pelo seu id
router.get('/tutor/:id', [authMiddleware.check], TutorController.findOne);

//cria um novo tutor
router.post('/tutor', [authMiddleware.check], TutorController.store);

//atualiza um tutor pelo seu id
router.put('/tutor/:id', [authMiddleware.check], TutorController.update);

//deleta um tutor pelo seu id
router.delete('/tutor/:id', [authMiddleware.check], TutorController.delete);

module.exports = router;