import DB from '../../bd/inMemoryRepositoryDB';
import { TypeBoardAdd, TypeBoardUpdate } from '../../common/interfacesAndTypeDB';
import Board from './board.model';

const TABLE_NAME = 'Boards'

/**
 * Return all boards in the database
 * @async
 * @returns {Promise<object>} return all boards
 */
const getAll = async () => DB.getAllEntity(TABLE_NAME);

/**
 * Return board in the database
 * @async
 * @param {string} id The id board
 * @returns {Promise<object>} return one board
 */
const get = async (id: string) => DB.getEntity(TABLE_NAME, id);

/**
 * Adding a board to the database
 * @async
 * @param {object} reqBody The params for new Board
 * @returns {Promise<object>} return new Board
 */
const add = async (reqBody: TypeBoardAdd) => {
	const board = new Board(reqBody);
	return DB.addEntity(TABLE_NAME, board);
};

/**
 * Updating a board in the database
 * @async
 * @param {string} id The id board
 * @param {object} params The params for update board
 * @returns {Promise<object>} return update board
 */
const update = async (id: string, params: TypeBoardUpdate) => DB.updateEntity(TABLE_NAME, id, params);

/**
 * Removing a board from the database
 * @async
 * @param {string} id The id board
 * @returns {Promise<object>} return delete board
 */
const remove = async (id: string) => DB.removeEntity(TABLE_NAME, id);

export default { getAll, get, add, update, remove };