const entregaModel = require("../models/entregaModel");

const getAllEntregas = async (req, res) => {
    try {
        const entregas = await entregaModel.getEntregas();
        res.status(200).json(entregas);
    } catch (error) {
        console.error("Erro ao buscar entregas:", error); 
        res.status(500).json({ error: "Erro ao buscar entregas"}); 
    }
};

const getEntregaById = async (req, res) => {
    try {
        const entrega = await entregaModel.getEntregaById(req.params.id);
        if (!entrega) {
            return res.status(404).json({ error: "Entrega não encontrada" });
        }
        res.status(200).json(entrega);
    } catch (error) {
        console.error("Erro ao buscar entrega por ID:", error);
        res.status(500).json({ error: "Erro ao buscar entrega" }); 
}
    };

const createEntrega = async (req, res) => {
    try {
        const { name, endereco, telefone, produto } = req.body;
        const novaEntrega = await entregaModel.createEntrega(name, endereco, telefone, produto);
        res.status(201).json(novaEntrega);
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar entrega" });
    }
};

const updateEntrega = async (req, res) => {
    try {
        const { name, endereco, telefone, produto } = req.body;
        const entregaAtualizada = await entregaModel.updateEntrega(req.params.id, name, endereco, telefone, produto);
        if (!entregaAtualizada) {
            return res.status(404).json({ error: "Entrega não encontrada" });
        }
        res.status(200).json(entregaAtualizada);
    } catch (error) {
        console.error("Erro ao atualizar entrega:", error); 
        res.status(500).json({ error: "Erro ao atualizar entrega"}); 
    }
};

const deleteEntrega = async (req, res) => {
    try {
        const resultado = await entregaModel.deleteEntrega(req.params.id);
        if (resultado.error) {
            console.error("Erro ao deletar entrega:", resultado.error); 
            return res.status(404).json(resultado);
        }
        res.status(200).json(resultado);
    } catch (error) {
        console.error("Erro ao deletar entrega:", error); 
        res.status(500).json({ error: "Erro ao deletar entrega" }); 
    }
};

module.exports = { getAllEntregas, getEntregaById, createEntrega, updateEntrega, deleteEntrega,};