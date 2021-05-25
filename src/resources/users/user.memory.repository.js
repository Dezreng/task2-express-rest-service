const DB = require('../../bd/inMemoryRepositoryDB');
const User = require('./user.model');

const TABLE_NAME = 'Users';

/**
 * Return all users in the database
 * @async
 * @returns {Promise<object>} return all users
 */
const getAll = async () => DB.getAll(TABLE_NAME);

/**
 * Return user in the database
 * @async
 * @param {string} id The id user
 * @returns {Promise<object>} return user
 */
const get = async (id) => DB.get(TABLE_NAME, id);

/**
 * Adding a user to the database
 * @async
 * @param {object} reqBody The params for create user
 * @returns {Promise<object>} return new User
 */
const add = async (reqBody) => {
	const user = new User(reqBody);
	return DB.add(TABLE_NAME, user);
};

/**
 * Updating a user in the database
 * @async
 * @param {string} id The id user
 * @param {object} params The params for update user
 * @returns {Promise<object>} return update user
 */
const update = async (id, params) => DB.update(TABLE_NAME, id, params);

/**
 * Removing a user from the database
 * @async
 * @param {string} id The id user
 * @returns {Promise<object>} return remove user
 */
const remove = async (id) => DB.remove(TABLE_NAME, id);

module.exports = { getAll, get, add, update, remove };
