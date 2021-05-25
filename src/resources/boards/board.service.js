const boardsRepo = require('./board.memory.repository');

/**
 * Return all boards in the database
 * @returns {Promise<object>} return all board
 */
const getAll = (idBoard) => boardsRepo.getAll(idBoard);

/**
 * Return board in the database
 * @param {string} id The id board
 * @returns {Promise<object>} return one board
 */
const get = (id) => boardsRepo.get(id);

/**
 * Adding a board to the database
 * @param {object} reqBody The params for create board
 * @returns {Promise<object>} return new Board
 */
const add = (reqBody) => boardsRepo.add(reqBody);

/**
 * Updating a board in the database
 * @param {string} id The id board
 * @param {object} params The params for update board
 * @returns {Promise<object>} return update board
 */
const update = (id, params) => boardsRepo.update(id, params);

/**
 * Removing a board from the database
 * @param {string} id The id board
 * @returns {Promise<object>} return delete board
 */
const remove = (id) => boardsRepo.remove(id);

module.exports = { getAll, get, add, update, remove };