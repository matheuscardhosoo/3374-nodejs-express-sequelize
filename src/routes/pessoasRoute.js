const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

const pessoaController = new PessoaController();
router.get('/pessoas', pessoaController.getAll.bind(pessoaController));
router.get('/pessoas/:id', pessoaController.getById.bind(pessoaController));
router.post('/pessoas', pessoaController.create.bind(pessoaController));
router.patch('/pessoas/:id', pessoaController.update.bind(pessoaController));
router.put('/pessoas/:id', pessoaController.replace.bind(pessoaController));
router.delete('/pessoas/:id', pessoaController.delete.bind(pessoaController));

module.exports = router;