import DB from '../../bd/inMemoryRepositoryDB';
import Task from './task.model';
import { TypeTaskAdd, TypeTaskUpdate } from '../../common/interfacesAndTypeDB';

const TABLE_NAME = 'Tasks'

/**
 * Return all tasks in the database
 * @async
 * @param {string} id The id board
 * @returns {Promise<object>} return all tasks for board
 */
const getAllTask = async (id: string) => DB.getAllTask(TABLE_NAME, id);

/**
 * Return task in the database
 * @async
 * @param {string} idTask The id task
 * @param {string} idBoard The id board
 * @returns {Promise<object>} return one task for board
 */
const getTask = async (idTask: string, idBoard: string) => DB.getTask(TABLE_NAME, idTask, idBoard);

/**
 * Adding a task to the database
 * @async
 * @param {object} reqBody The params for create task
 * @param {object} reqParams The params id board
 * @returns {Promise<object>} return new Task
 */
const add = async (reqBody: TypeTaskAdd, reqParams: any) => {
	const { boardIdParam } = reqParams;
	const { title, order, description, userId, columnId } = reqBody;
	const taskObj = {
		'title': title,
		'order': order,
		'description': description,
		'userId': userId,
		'boardId' : boardIdParam,
		'columnId': columnId
	}
	const user = new Task(taskObj);
	return DB.addEntity(TABLE_NAME, user);
}

/**
 * Updating a task in the database
 * @async
 * @param {string} idTask The id task
 * @param {string} idBoard The id board
 * @param {object} params The params for update task
 * @returns {Promise<object>} return update task for board
 */
const updateTask = async (idTask: string, idBoard: string, params: TypeTaskUpdate) => DB.updateTask(TABLE_NAME, idTask, idBoard, params);

/**
 * Removing a task from the database
 * @async
 * @param {string} idTask The id task
 * @param {string} idBoard The id board
 * @returns {Promise<object>} return remove task for board
 */
const removeTask = async (idTask: string, idBoard: string) => DB.removeTask(TABLE_NAME, idTask, idBoard);

export default { getAllTask, getTask, add, updateTask, removeTask };
