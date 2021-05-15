const DB = require('../../bd/inMemoryRepositoryDB');
const Task = require('./task.model');

const TABLE_NAME = 'Tasks'

const getAllTask = async (id) => DB.getAll(TABLE_NAME, id);

const getTask = async (idTask, idBoard) => DB.getTask(TABLE_NAME, idTask, idBoard);

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

const updateTask = async (idTask, idBoard, params) => DB.updateTask(TABLE_NAME, idTask, idBoard, params);

const removeTask = async (idTask, idBoard) => DB.removeTask(TABLE_NAME, idTask, idBoard);

module.exports = { getAllTask, getTask, add, updateTask, removeTask };
