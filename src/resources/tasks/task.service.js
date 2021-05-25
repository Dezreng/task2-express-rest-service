const tasksRepo = require('./task.memory.repository');

/**
 * Return all tasks in the database
 * @param {string} id 
 * @returns {Promise<object>}
 */
const getAllTask = (id) => tasksRepo.getAllTask(id);

/**
 * Return task in the database
 * @param {string} idTask 
 * @param {string} idBoard 
 * @returns {Promise<object>}
 */
const getTask = (idTask, idBoard) => tasksRepo.getTask(idTask, idBoard);

/**
 * Adding a task to the database
 * @param {object} reqBody 
 * @param {object} reqParams 
 * @returns {Promise<object>}
 */
const add = (reqBody, reqParams) => tasksRepo.add(reqBody, reqParams);

/**
 * Updating a task in the database
 * @param {string} idTask 
 * @param {string} idBoard 
 * @param {object} params 
 * @returns {Promise<object>}
 */
const updateTask = (idTask, idBoard, params) => tasksRepo.updateTask(idTask, idBoard, params);

/**
 * Removing a task from the database
 * @param {string} idTask 
 * @param {string} idBoard 
 * @returns {Promise<object>}
 */
const removeTask = (idTask, idBoard) => tasksRepo.removeTask(idTask, idBoard);

module.exports = { getAllTask, getTask, add, updateTask, removeTask };
