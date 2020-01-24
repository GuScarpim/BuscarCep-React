const express = require('express');
const router = express.Router();
// Importando meu express para fazer validações
const { check } = require('express-validator');
const mentionsController = require('../controllers/mentions-controller');

router.get('/', mentionsController.listMentions);

// Validando meu post
router.post('/', [
    check('friend').isLength({ min: 3 }).withMessage("O nome precisa ter no mínimo 3 caracteres."),
    check('mention').isLength({ min: 5, max: 280 }).withMessage("A menção precisa ter no mínimo 5 caracteres e no máximo 280.")
], mentionsController.createMention);

// Editar
router.put('/:id', [
    check('friend').optional().isLength({ min: 3 }).withMessage("O nome precisa ter no mínimo 3 caracteres."),
    check('mention').optional().isLength({ min: 5, max: 280 }).withMessage("A menção precisa ter no mínimo 5 caracteres e no máximo 280.")
], mentionsController.updateMention);

// Deletar por ID
router.delete('/:id', mentionsController.deleteMention);

module.exports = router;