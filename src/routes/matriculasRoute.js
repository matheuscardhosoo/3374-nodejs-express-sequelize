const { Router } = require('express');
const MatriculaController = require('../controllers/MatriculaController');

const router = Router();

const matriculaController = new MatriculaController();
router.get('/matriculas', matriculaController.getAll.bind(matriculaController));
router.get('/matriculas/:id', matriculaController.getById.bind(matriculaController));
router.post('/matriculas', matriculaController.create.bind(matriculaController));
router.patch('/matriculas/:id', matriculaController.update.bind(matriculaController));
router.put('/matriculas/:id', matriculaController.replace.bind(matriculaController));
router.delete('/matriculas/:id', matriculaController.delete.bind(matriculaController));

module.exports = router;