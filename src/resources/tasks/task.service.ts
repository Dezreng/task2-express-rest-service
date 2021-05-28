import { TypeTaskAdd, TypeTaskUpdate } from '../../common/interfacesAndTypeDB';
import tasksRepo from './task.memory.repository';

/**
 * Return all tasks in the database
 * @param {string} id The id board
 * @returns {Promise<object>} return all tasks for board
 */
const getAllTask = (id: string) => tasksRepo.getAllTask(id);

/**
 * Return task in the database
 * @param {string} idTask  The id task
 * @param {string} idBoard The id board
 * @returns {Promise<object>} return one task for board
 */
const getTask = (idTask: string, idBoard: string) => tasksRepo.getTask(idTask, idBoard);

/**
 * Adding a task to the database
 * @param {object} reqBody The params for create
 * @param {object} reqParams The params for create
 * @returns {Promise<object>} return new Task
 */
const add = (reqBody: TypeTaskAdd, boardId: string) => tasksRepo.add(reqBody, boardId);

/**
 * Updating a task in the database
 * @param {string} idTask The id task
 * @param {string} idBoard The id board
 * @param {object} params return update task for board
 * @returns {Promise<object>}
 */
const updateTask = (idTask: string, idBoard: string, params: TypeTaskUpdate) => tasksRepo.updateTask(idTask, idBoard, params);

/**
 * Removing a task from the database
 * @param {string} idTask The id task
 * @param {string} idBoard The id board
 * @returns {Promise<object>} return remove task
 */
const removeTask = (idTask: string, idBoard: string) => tasksRepo.removeTask(idTask, idBoard);

export default { getAllTask, getTask, add, updateTask, removeTask };
