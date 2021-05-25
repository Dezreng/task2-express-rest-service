const DB = require('../../bd/inMemoryRepositoryDB');
const Board = require('./board.model');

const TABLE_NAME = 'Boards'

/**
 * Return all boards in the database
 * @async
 * @returns {Promise<object>} return all boards
 */
const getAll = async () => DB.getAllTask(TABLE_NAME);

/**
 * Return board in the database
 * @async
 * @param {string} id The id board
 * @returns {Promise<object>} return one board
 */
const get = async (id) => DB.get(TABLE_NAME, id);

/**
 * Adding a board to the database
 * @async
 * @param {object} reqBody The params for new Board
 * @returns {Promise<object>} return new Board
 */
const add = async (reqBody) => {
	const board = new Board(reqBody);
	return DB.add(TABLE_NAME, board);
};

/**
 * Updating a board in the database
 * @async
 * @param {string} id The id board
 * @param {object} params The params for update board
 * @returns {Promise<object>} return update board
 */
const update = async (id, params) => DB.update(TABLE_NAME, id, params);

/**
 * Removing a board from the database
 * @async
 * @param {string} id The id board
 * @returns {Promise<object>} return delete board
 */
const remove = async (id) => DB.remove(TABLE_NAME, id);

module.exports = { getAll, get, add, update, remove };