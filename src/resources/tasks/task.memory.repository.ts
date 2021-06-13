import DB from '../../bd/inMemoryRepositoryDB';
import Task from './task.model';
import { TypeTaskAdd, TypeTaskUpdate } from '../../common/interfacesAndTypeDB';
import ErrorNotFound from '../../error/errorNotFound';

const TABLE_NAME = 'Tasks'

const getAllTask = async (id: string) => DB.getAllTask(TABLE_NAME, id);

const getTask = async (idTask: string, idBoard: string) => { 
	const task = DB.getTask(TABLE_NAME, idTask, idBoard);

	if(!task){
		throw new ErrorNotFound("Not Found!");
	}

	return task;
};

const add = async (reqBody: TypeTaskAdd, boardId: string) => {
	const user = new Task({...reqBody, boardId});
	return DB.addEntity(TABLE_NAME, user);
}

const updateTask = async (idTask: string, idBoard: string, params: TypeTaskUpdate) => DB.updateTask(TABLE_NAME, idTask, idBoard, params);

const removeTask = async (idTask: string, idBoard: string) => DB.removeTask(TABLE_NAME, idTask, idBoard);

export default { getAllTask, getTask, add, updateTask, removeTask };
