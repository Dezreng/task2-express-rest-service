const DB = require('../../bd/inMemoryRepositoryDB');
const Task = require('./task.model');

const TABLE_NAME = 'Tasks'

/**
 * Return all tasks in the database
 * @async
 * @param {string} id 
 * @returns {Promise<object>}
 */
const getAllTask = async (id) => DB.getAll(TABLE_NAME, id);

/**
 * Return task in the database
 * @async
 * @param {string} idTask 
 * @param {string} idBoard 
 * @returns {Promise<object>}
 */
const getTask = async (idTask, idBoard) => DB.getTask(TABLE_NAME, idTask, idBoard);

/**
 * Adding a task to the database
 * @async
 * @param {object} reqBody 
 * @param {object} reqParams 
 * @returns {Promise<object>}
 */
const add = async (reqBody, reqParams) => {
	const { boardIdParam } = reqParams;
	const { title, order, description, userId, boardId, columnId } = reqBody;
	const taskObj = {
		'title': title,
		'order': order,
		'description': description,
		'userId': userId,
		'boardId' : boardId || boardIdParam,
		'columnId': columnId
	}
	const user = new Task(taskObj);
	return DB.add(TABLE_NAME, user);
}

/**
 * Updating a task in the database
 * @async
 * @param {string} idTask 
 * @param {string} idBoard 
 * @param {object} params 
 * @returns {Promise<object>}
 */
const updateTask = async (idTask, idBoard, params) => DB.updateTask(TABLE_NAME, idTask, idBoard, params);

/**
 * Removing a task from the database
 * @async
 * @param {string} idTask 
 * @param {string} idBoard 
 * @returns {Promise<object>}
 */
const removeTask = async (idTask, idBoard) => DB.removeTask(TABLE_NAME, idTask, idBoard);

module.exports = { getAllTask, getTask, add, updateTask, removeTask };
