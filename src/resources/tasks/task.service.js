const tasksRepo = require('./task.memory.repository');

/**
 * Return all tasks in the database
 * @param {string} id The id board
 * @returns {Promise<object>} return all tasks for board
 */
const getAllTask = (id) => tasksRepo.getAllTask(id);

/**
 * Return task in the database
 * @param {string} idTask  The id task
 * @param {string} idBoard The id board
 * @returns {Promise<object>} return one task for board
 */
const getTask = (idTask, idBoard) => tasksRepo.getTask(idTask, idBoard);

/**
 * Adding a task to the database
 * @param {object} reqBody The params for create
 * @param {object} reqParams The params for create
 * @returns {Promise<object>} return new Task
 */
const add = (reqBody, reqParams) => tasksRepo.add(reqBody, reqParams);

/**
 * Updating a task in the database
 * @param {string} idTask The id task
 * @param {string} idBoard The id board
 * @param {object} params return update task for board
 * @returns {Promise<object>}
 */
const updateTask = (idTask, idBoard, params) => tasksRepo.updateTask(idTask, idBoard, params);

/**
 * Removing a task from the database
 * @param {string} idTask The id task
 * @param {string} idBoard The id board
 * @returns {Promise<object>} return remove task
 */
const removeTask = (idTask, idBoard) => tasksRepo.removeTask(idTask, idBoard);

module.exports = { getAllTask, getTask, add, updateTask, removeTask };
