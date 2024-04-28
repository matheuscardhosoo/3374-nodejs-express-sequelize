const { Router } = require('express');
const CategoriaController = require('../controllers/CategoriaController');

const router = Router();

const categoriaController = new CategoriaController();
router.get('/categorias', categoriaController.getAll.bind(categoriaController));
router.get('/categorias/:id', categoriaController.getById.bind(categoriaController));
router.post('/categorias', categoriaController.create.bind(categoriaController));
router.patch('/categorias/:id', categoriaController.update.bind(categoriaController));
router.put('/categorias/:id', categoriaController.replace.bind(categoriaController));
router.delete('/categorias/:id', categoriaController.delete.bind(categoriaController));

module.exports = router;