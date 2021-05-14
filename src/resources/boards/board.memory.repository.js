const DB = require('../../bd/isMemoryRepositoryDB');
const Board = require('./board.model');

const TABLE_NAME = 'Boards'

const getAll = async () => DB.getAll(TABLE_NAME);

const get = async (id) => DB.get(TABLE_NAME, id);

const add = async (reqBody) => {
	const board = new Board(reqBody);
	return DB.add(TABLE_NAME, board);
};

const update = async (id, params) => DB.update(TABLE_NAME, id, params);

const remove = async (id) => DB.remove(TABLE_NAME, id);

module.exports = { getAll, get, add, update, remove };