const pedidoModel = require("../models/pedidoModel");

const getAllPedidos = async (req, res) => {
    try {
        const pedidos = await pedidoModel.getPedidos();
        res.json(pedidos);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar pedidos." });
    }
};

const getPedido = async (req, res) => {
    try {
        const pedido = await pedidoModel.getPedidoById(req.params.id);
        if (!pedido) {
            return res.status(404).json({ message: "Pedido não encontrado." });
        }
        res.json(pedido);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar pedido." });
    }
};

const createPedido = async (req, res) => {
    try {
        const { name, quantidade, valor, endereco, entrega_id} = req.body;
        const photo = req.file ? req.file.path : null; // Verifica se a imagem foi enviada
        const newPedido = await pedidoModel.createPedido(name, quantidade, valor, endereco, entrega_id, photo);

        res.status(201).json(newPedido);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar pedido." });
    }
};

const deletePedido = async (req, res) => {
    try {
        const message = await pedidoModel.deletePedido(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar pedido." });
    }
};

const updatePedido = async (req, res) => {
    try {
        const { name, quantidade, valor, endereco, entrega_id } = req.body;
        const updatePedido = await pedidoModel.updatePedido(req.params.id, name, quantidade, valor, endereco, entrega_id);
        if (!updatePedido) {
            return res.status(404).json({ message: "Pedido não encontrado." });
        }
        res.json(updatePedido);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar pedido." });
    }
};

module.exports = { getAllPedidos, getPedido, createPedido, deletePedido, updatePedido };

