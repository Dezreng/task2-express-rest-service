const DB = require('../../bd/inMemoryRepositoryDB');
const User = require('./user.model');

const TABLE_NAME = 'Users';

/**
 * Return all users in the database
 * @async
 * @returns {Promise<object>}
 */
const getAll = async () => DB.getAll(TABLE_NAME);

/**
 * Return user in the database
 * @async
 * @param {string} id 
 * @returns {Promise<object>}
 */
const get = async (id) => DB.get(TABLE_NAME, id);

/**
 * Adding a user to the database
 * @async
 * @param {object} reqBody 
 * @returns {Promise<object>}
 */
const add = async (reqBody) => {
	const user = new User(reqBody);
	return DB.add(TABLE_NAME, user);
};

/**
 * Updating a user in the database
 * @async
 * @param {string} id 
 * @param {object} params 
 * @returns {Promise<object>}
 */
const update = async (id, params) => DB.update(TABLE_NAME, id, params);

/**
 * Removing a user from the database
 * @async
 * @param {string} id 
 * @returns {Promise<object>}
 */
const remove = async (id) => DB.remove(TABLE_NAME, id);

module.exports = { getAll, get, add, update, remove };
