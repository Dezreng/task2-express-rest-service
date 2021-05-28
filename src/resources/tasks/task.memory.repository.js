const DB = require('../../bd/inMemoryRepositoryDB');
const Task = require('./task.model');

const TABLE_NAME = 'Tasks'

/**
 * Return all tasks in the database
 * @async
 * @param {string} id The id board
 * @returns {Promise<object>} return all tasks for board
 */
const getAllTask = async (id) => DB.getAll(TABLE_NAME, id);

/**
 * Return task in the database
 * @async
 * @param {string} idTask The id task
 * @param {string} idBoard The id board
 * @returns {Promise<object> | Promise<undefined>} return one task for board
 */
const getTask = async (idTask, idBoard) => DB.getTask(TABLE_NAME, idTask, idBoard);

/**
 * Adding a task to the database
 * @async
 * @param {object} reqBody The params for create task
 * @param {object} reqParams The params id board
 * @returns {Promise<object>} return new Task
 */
const add = async (reqBody, boardId) => {
	const user = new Task({...reqBody, boardId});
	return DB.add(TABLE_NAME, user);
}

/**
 * Updating a task in the database
 * @async
 * @param {string} idTask The id task
 * @param {string} idBoard The id board
 * @param {object} params The params for update task
 * @returns {Promise<object>} return update task for board
 */
const updateTask = async (idTask, idBoard, params) => DB.updateTask(TABLE_NAME, idTask, idBoard, params);

/**
 * Removing a task from the database
 * @async
 * @param {string} idTask The id task
 * @param {string} idBoard The id board
 */
const removeTask = async (idTask, idBoard) => DB.removeTask(TABLE_NAME, idTask, idBoard);

module.exports = { getAllTask, getTask, add, updateTask, removeTask };
