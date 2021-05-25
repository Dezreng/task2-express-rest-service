const usersRepo = require('./user.memory.repository');

/**
 * Return all users in the database
 * @returns {Promise<object>} return all users
 */
const getAll = () => usersRepo.getAll();

/**
 * Return user in the database
 * @param {string} id The id user
 * @returns {Promise<object>} return user
 */
const get = (id) => usersRepo.get(id);

/**
 * Adding a user to the database
 * @param {object} reqBody The params for create user
 * @returns {Promise<object>} return new User
 */
const add = (reqBody) => usersRepo.add(reqBody);

/**
 * Updating a user in the database
 * @param {string} id The id user
 * @param {object} params The params for update user
 * @returns {Promise<object>} return update user
 */
const update = (id, params) => usersRepo.update(id, params);

/**
 * Removing a user from the database
 * @param {string} id The id user
 * @returns {Promise<object>} return remove user
 */
const remove = (id) => usersRepo.remove(id);

module.exports = { getAll, get, add, update, remove };
