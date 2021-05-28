import DB from '../../bd/inMemoryRepositoryDB';
import User from './user.model';
import { TypeUserAdd, TypeUserUpdate } from '../../common/interfacesAndTypeDB';

const TABLE_NAME = 'Users';

/**
 * Return all users in the database
 * @async
 * @returns {Promise<object>} return all users
 */
const getAll = async () => DB.getAllEntity(TABLE_NAME);

/**
 * Return user in the database
 * @async
 * @param {string} id The id user
 * @returns {Promise<object> | Promise<undefined>} return user
 */
const get = async ( id: string ) => DB.getEntity(TABLE_NAME, id);

/**
 * Adding a user to the database
 * @async
 * @param {object} reqBody The params for create user
 * @returns {Promise<object>} return new User
 */
const add = async ( reqBody: TypeUserAdd ) => {
	const user = new User(reqBody);
	return DB.addEntity(TABLE_NAME, user);
};

/**
 * Updating a user in the database
 * @async
 * @param {string} id The id user
 * @param {object} params The params for update user
 * @returns {Promise<object>} return update user
 */
const update = async ( id: string, params: TypeUserUpdate ) => DB.updateEntity(TABLE_NAME, id, params);

/**
 * Removing a user from the database
 * @async
 * @param {string} id The id user
 */
const remove = async ( id: string ) => DB.removeEntity(TABLE_NAME, id);

export default { getAll, get, add, update, remove };
