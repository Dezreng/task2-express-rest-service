const DB = require('../../bd/inMemoryRepositoryDB');
const Board = require('./board.model');

const TABLE_NAME = 'Boards'

/**
 * Return all boards in the database
 * @async
 * @returns {Promise<object>}
 */
const getAll = async () => DB.getAllTask(TABLE_NAME);

/**
 * Return board in the database
 * @async
 * @param {string} id 
 * @returns {Promise<object>}
 */
const get = async (id) => DB.get(TABLE_NAME, id);

/**
 * Adding a board to the database
 * @async
 * @param {object} reqBody 
 * @returns {Promise<object>}
 */
const add = async (reqBody) => {
	const board = new Board(reqBody);
	return DB.add(TABLE_NAME, board);
};

/**
 * Updating a board in the database
 * @async
 * @param {string} id 
 * @param {object} params 
 * @returns {Promise<object>}
 */
const update = async (id, params) => DB.update(TABLE_NAME, id, params);

/**
 * Removing a board from the database
 * @async
 * @param {string} id 
 * @returns {Promise<object>}
 */
const remove = async (id) => DB.remove(TABLE_NAME, id);

module.exports = { getAll, get, add, update, remove };