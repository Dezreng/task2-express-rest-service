const tasksRepo = require('./task.memory.repository');

const getAllTask = (id) => tasksRepo.getAllTask(id);

const getTask = (idTask, idBoard) => tasksRepo.getTask(idTask, idBoard);

const add = (reqBody, reqParams) => tasksRepo.add(reqBody, reqParams);

const updateTask = (idTask, idBoard, params) => tasksRepo.updateTask(idTask, idBoard, params);

const removeTask = (idTask, idBoard) => tasksRepo.removeTask(idTask, idBoard);

module.exports = { getAllTask, getTask, add, updateTask, removeTask };
