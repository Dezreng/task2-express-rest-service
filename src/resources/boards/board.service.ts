import { TypeBoardAdd, TypeBoardUpdate } from '../../common/interfacesAndTypeDB';
import boardsRepo from './board.memory.repository';

/**
 * Return all boards in the database
 * @returns {Promise<object>} return all board
 */
const getAll = () => boardsRepo.getAll();

/**
 * Return board in the database
 * @param {string} id The id board
 * @returns {Promise<object>} return one board
 */
const get = (id: string) => boardsRepo.get(id);

/**
 * Adding a board to the database
 * @param {object} reqBody The params for create board
 * @returns {Promise<object>} return new Board
 */
const add = (reqBody: TypeBoardAdd) => boardsRepo.add(reqBody);

/**
 * Updating a board in the database
 * @param {string} id The id board
 * @param {object} params The params for update board
 * @returns {Promise<object>} return update board
 */
const update = (id: string, params: TypeBoardUpdate) => boardsRepo.update(id, params);

/**
 * Removing a board from the database
 * @param {string} id The id board
 * @returns {Promise<object>} return delete board
 */
const remove = (id: string) => boardsRepo.remove(id);

export default { getAll, get, add, update, remove };