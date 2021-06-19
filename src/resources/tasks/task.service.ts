import { TaskDTO } from '../../common/interfacesAndTypeDB';
import Task from '../../entity/task.model';
import tasksRepo from './task.memory.repository';

const getAllTask = (id: string) => tasksRepo.getAllTask(id);

const getTask = (idTask: string, idBoard: string) => tasksRepo.getTask(idTask, idBoard);

const addTask = (reqBody: Task, boardId: string) => tasksRepo.addTask(reqBody, boardId);

const updateTask = (idTask: string, idBoard: string, params: TaskDTO) => tasksRepo.updateTask(idTask, idBoard, params);

const removeTask = (idTask: string, idBoard: string) => tasksRepo.removeTask(idTask, idBoard);

export default { getAllTask, getTask, addTask, updateTask, removeTask };
