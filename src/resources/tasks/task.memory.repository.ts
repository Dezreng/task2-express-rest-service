import Task from '../../entity/task.model';
import { TaskDTO } from '../../common/interfacesAndTypeDB';
import ErrorNotFound from '../../error/errorNotFound';

const getAllTask = async (boardId: string) => {
	const tasks = await Task.find({ where: { boardId }, loadRelationIds: true });
	return tasks
}

const getTask = async (idTask: string, boardId: string) => { 
	const task = await Task.findOne(idTask, {
    where: { boardId },
    loadRelationIds: true
  });

	if(!task){
		throw new ErrorNotFound("Task Not Found!");
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
	const task = await getTask(idTask, idBoard);
	await Task.delete({ id: task.id, boardId: task.boardId });
};

export default { getAllTask, getTask, addTask, updateTask, removeTask };
