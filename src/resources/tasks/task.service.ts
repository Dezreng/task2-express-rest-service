import { TypeTaskAdd, TypeTaskUpdate } from '../../common/interfacesAndTypeDB';
import tasksRepo from './task.memory.repository';

const getAllTask = (id: string) => tasksRepo.getAllTask(id);

const getTask = (idTask: string, idBoard: string) => tasksRepo.getTask(idTask, idBoard);

const add = (reqBody: TypeTaskAdd, boardId: string) => tasksRepo.add(reqBody, boardId);

const updateTask = (idTask: string, idBoard: string, params: TypeTaskUpdate) => tasksRepo.updateTask(idTask, idBoard, params);

const removeTask = (idTask: string, idBoard: string) => tasksRepo.removeTask(idTask, idBoard);

export default { getAllTask, getTask, add, updateTask, removeTask };
