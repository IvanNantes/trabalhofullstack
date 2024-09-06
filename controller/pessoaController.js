const { defaultValueSchemable } = require('sequelize/lib/utils');
const { pessoa } = require('../models');

exports.createPessoa = async (req, res) => {
    try {
        const { CPF, Nome, Telefone } = req.body;

        const novaPessoa = await pessoa.create({
            CPF,
            Nome,
            Telefone,
        });

        res.status(201).json(novaPessoa);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar pessoa', details: error.message });
    }
};
exports.getAllPessoas = async (req, res) => {
    try {
        const pessoas = await pessoa.findAll();
        res.status(200).json(pessoas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar pessoas', details: error.message });
    }
};
exports.getPessoaById = async (req, res) => {
    try {
        const { id } = req.params;
        const pessoaId = await pessoa.findByPk(id);
        
        if (!pessoaId) {
            return res.status(404).json({ error: 'Pessoa não encontrada' });
        }

        res.status(200).json(pessoaId);
    } catch (error) {
        res.stauts(500).json({ error: 'Erro ao buscar pessoa', details: error.message });
    }
};
exports.updatePessoa = async (req, res) => {
    try {
        const { id } = req.params;
        const { CPF, Nome, Telefone } = req.body;
        const pessoaUpdate = await pessoa.findByPk(id);

        if (!pessoaUpdate) {
            return res.status(404).json({ error: 'Pessoa não encontrada' });
        }

        pessoa.CPF = CPF;
        pessoa.Nome = Nome;
        pessoa.Telefone = Telefone;

        await pessoaUpdate.save();

        res.status(200).json(pessoaUpdate);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar informações', details: error.message });
    }
};
exports.deletePessoa = async (req, res) => {
    try {
        const { id } = req.params;

        const pessoaRemover = await pessoa.findByPk(id);

        if (!pessoaRemover) {
            return res.status(404).json({ error: 'Pessoa não encontrada' });
        }

        await pessoaRemover.destroy();

        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar pessoa', details: error.message});
    }
};