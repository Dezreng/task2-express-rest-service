import Task from '../../entity/task.model';
import { TaskDTO } from '../../common/interfacesAndTypeDB';
import ErrorNotFound from '../../error/errorNotFound';

const getAllTask = async (id: string) => {
	const tasks = await Task.find({ boardId: id });
	return tasks
}

const getTask = async (idTask: string, idBoard: string) => { 
	const task = await Task.findOne({ id: idTask, boardId: idBoard });

	if(!task){
		throw new ErrorNotFound("Not Found!");
	}

	return task;
};

const addTask = async (reqBody: Task, boardId: string) => {
	const newTask = Task.create({ ...reqBody, boardId });
	const res = await Task.save(newTask);
	return res;
};

const updateTask = async (idTask: string, idBoard: string, params: TaskDTO) => {
	const task = await getTask(idTask, idBoard);
	Task.merge(task, params);
	const res = await Task.save(task);
	return res;
};

const removeTask = async (idTask: string, idBoard: string) => {
	await Task.delete({ id: idTask, boardId: idBoard })
};

export default { getAllTask, getTask, addTask, updateTask, removeTask };
