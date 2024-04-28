const { Router } = require('express');
const CursoController = require('../controllers/CursoController');
const MatriculaController = require('../controllers/MatriculaController');

const router = Router();

const cursoController = new CursoController();
const matriculaController = new MatriculaController();

router.get('/cursos', cursoController.getAll.bind(cursoController));
router.get('/cursos/:id', cursoController.getById.bind(cursoController));
router.post('/cursos', cursoController.create.bind(cursoController));
router.patch('/cursos/:id', cursoController.update.bind(cursoController));
router.put('/cursos/:id', cursoController.replace.bind(cursoController));
router.delete('/cursos/:id', cursoController.delete.bind(cursoController));
router.post('/cursos/:id/matriculas', matriculaController.create.bind(matriculaController));

module.exports = router;