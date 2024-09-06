const express = require('express');
const pessoaController = require('./controller/pessoaController');
const router = express.Router();

router.post('/pessoas', pessoaController.createPessoa);
router.get('/pessoas', pessoaController.getAllPessoas);
router.get('/pessoas/:id', pessoaController.getPessoaById);
router.put('/pessoas/:id', pessoaController.updatePessoa);
router.delete('/pessoas/:id', pessoaController.deletePessoa);

module.exports = router;