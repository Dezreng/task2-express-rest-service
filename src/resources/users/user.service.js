const usersRepo = require('./user.memory.repository');

/**
 * Return all users in the database
 * @returns {Promise<object>}
 */
const getAll = () => usersRepo.getAll();

/**
 * Return user in the database
 * @param {string} id 
 * @returns {Promise<object>}
 */
const get = (id) => usersRepo.get(id);

/**
 * Adding a user to the database
 * @param {object} reqBody 
 * @returns {Promise<object>}
 */
const add = (reqBody) => usersRepo.add(reqBody);

/**
 * Updating a user in the database
 * @param {string} id 
 * @param {object} params 
 * @returns {Promise<object>}
 */
const update = (id, params) => usersRepo.update(id, params);

/**
 * Removing a user from the database
 * @param {string} id 
 * @returns {Promise<object>}
 */
const remove = (id) => usersRepo.remove(id);

module.exports = { getAll, get, add, update, remove };
