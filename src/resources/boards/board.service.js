const boardsRepo = require('./board.memory.repository');

/**
 * Return all boards in the database
 * @returns {Promise<object>}
 */
const getAll = (idBoard) => boardsRepo.getAll(idBoard);

/**
 * Return board in the database
 * @param {string} id 
 * @returns {Promise<object>}
 */
const get = (id) => boardsRepo.get(id);

/**
 * Adding a board to the database
 * @param {object} reqBody 
 * @returns {Promise<object>}
 */
const add = (reqBody) => boardsRepo.add(reqBody);

/**
 * Updating a board in the database
 * @param {string} id 
 * @param {object} params 
 * @returns {Promise<object>}
 */
const update = (id, params) => boardsRepo.update(id, params);

/**
 * Removing a board from the database
 * @param {string} id 
 * @returns {Promise<object>}
 */
const remove = (id) => boardsRepo.remove(id);

module.exports = { getAll, get, add, update, remove };