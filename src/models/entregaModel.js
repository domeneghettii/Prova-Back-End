const pool = require("../config/database");

const getPedidos = async () => {
    const result = await pool.query(
        `SELECT pedidos.*, entregas.name AS entrega_name 
         FROM pedidos
         LEFT JOIN entregas ON pedidos.entrega_id = entregas.id`
    );
    return result.rows;
};

const getPedidoById = async (id) => {
    const result = await pool.query(
        `SELECT pedidos.*, entregas.name AS entrega_name 
         FROM pedidos
         LEFT JOIN entregas ON pedidos.entrega_id = entregas.id 
         WHERE pedidos.id = $1`, [id] 
    );
    return result.rows[0];
};

//Atualizar para receber photo.
const createWizard = async (name, quantidade, valor, endereco, entrega_id, photo) => {
    const result = await pool.query(
        `INSERT INTO pedidos (name, quantidade, valor, endereco, entrega_id, photo) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
        [name, quantidade, valor, endereco, entrega_id, photo]
    );
    return result.rows[0];
};

const updatePedido = async (id, name, quantidade, valor, endereco, entrega_id) => {
    const result = await pool.query(
        `UPDATE pedidos SET name = $1, quantidade = $2, valor = $3, endereco = $4, entrega_id = $5 WHERE id = $6 RETURNING *`,
        [name, quantidade, valor, endereco, entrega_id, id]
    );
    return result.rows[0];
};

const deletePedido = async (id) => {
    const result = await pool.query(`DELETE FROM pedidos WHERE id = $1 RETURNING *`,[id]);
    if (result.rowCount === 0) {
        return { error: "Pedido não encontrado!" };
    }
    return { message: "Pedido deletado com sucesso!" };
};

const getEntregas = async () => {
    const result = await pool.query(`SELECT * FROM entregas`);
    return result.rows;
};

const getEntregaById = async (id) => {
    const result = await pool.query(`SELECT * FROM entregas WHERE id = $1`, [id]);
    return result.rows[0];
};

const deleteEntrega = async (id) => {
    const result = await pool.query(`DELETE FROM entregas WHERE id = $1 RETURNING *`, [id]);
    if (result.rowCount === 0) {
        return { error: "Entrega não encontrada!" };
    }
    return { message: "Entrega deletada com sucesso!" };
};

module.exports = { getPedidos, getPedidoById, createWizard, updatePedido, deletePedido, getEntregas, getEntregaById, deleteEntrega };
