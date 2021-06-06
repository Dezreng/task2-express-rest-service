import DB from '../../bd/inMemoryRepositoryDB';
import Task from './task.model';
import { TypeTaskAdd, TypeTaskUpdate } from '../../common/interfacesAndTypeDB';
import ErrorNotFound from '../../error/errorNotFound';

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
 * @returns {Promise<object> | Promise<undefined>} return one task for board
 */
const getTask = async (idTask: string, idBoard: string) => { 
	const task = DB.getTask(TABLE_NAME, idTask, idBoard);

	if(!task){
		throw new ErrorNotFound("Not Found!");
	}

	return task;
};

/**
 * Adding a task to the database
 * @async
 * @param {object} reqBody The params for create task
 * @param {object} reqParams The params id board
 * @returns {Promise<object>} return new Task
 */
const add = async (reqBody: TypeTaskAdd, boardId: string) => {
	const user = new Task({...reqBody, boardId});
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
 */
const removeTask = async (idTask: string, idBoard: string) => DB.removeTask(TABLE_NAME, idTask, idBoard);

export default { getAllTask, getTask, add, updateTask, removeTask };
