const { validationResult } = require('express-validator');
const repository = require('../repositories/mentions-repository');


// lista os dados cadastrados
exports.listMentions = async (req, res) => {
    try {
        // chamada de dados
        const data = await repository.listMentions();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ message: 'Falha ao carregar as menções.' });
    }
};

// Criar
exports.createMention = async (req, res) => {
    // array errors de dentro da requisição, que foi adicionado pelo check()
    const { errors } = validationResult(req);
    // Valida se errors nao está vazio
    if (errors.length > 0) {
        return res.status(400).send({ message: errors })
    }
    try {
        // chamada de dados
        await repository.createMention({
            friend: req.body.friend,
            mention: req.body.mention
        });
        res.status(201).send({ message: 'Menção cadastrada com sucesso!' });
    } catch (e) {
        res.status(500).send({ message: 'Falha ao cadastrar a menção.' });
    }
};

// Editar 
exports.updateMention = async (req, res) => {
    const { errors } = validationResult(req);

    // Se erro não estiver vazio
    if (errors.length > 0) {
        return res.status(400).send({ message: errors })
    }
    try {
        await repository.updateMention(req.params.id, req.body);
        return res.status(200).send({
            message: 'Menção atualizada com sucesso!'
        });
    } catch (e) {
        return res.status(500).send({ message: 'Falha ao atualizar a menção.' });
    }
};

// Excluir
exports.deleteMention = async (req, res) => {
    try {
        // Passa o id para poder excluir
        await repository.deleteMention(req.params.id);
        res.status(200).send({
            message: 'Menção removida com sucesso!'
        });
    } catch (e) {
        res.status(500).send({ message: 'Falha ao remover a menção.' });
    }
};