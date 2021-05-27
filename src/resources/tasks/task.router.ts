import { Router, Request, Response } from 'express';
import { TypeEntity } from '../../common/interfacesAndTypeDB';
import Task from './task.model';
import tasksService from './task.service';

const router = Router({ mergeParams: true });

router.route('/').get(async (req: Request, res: Response) => {
  const tasks: Array<Task> = await tasksService.getAllTask(req.params["boardIdParam"]);
  res.status(200).json(tasks.map(Task.toResponse));
});

router.route('/:id').get(async (req: Request, res: Response) => {
	const task: Task = await tasksService.getTask(req.params["id"], req.params["boardIdParam"]);
	if(!task){
		res.status(404).json();
	} else {
		res.status(200).json(Task.toResponse(task));
	}
});

router.route('/').post(async (req: Request, res: Response) => {
	const task: Task | TypeEntity = await tasksService.add(req.body, req.params);
	res.status(201).json(Task.toResponse((task as Task)))

})

router.route('/:id').put(async (req: Request, res: Response) => {
	const updateTask: Task = await tasksService.updateTask(req.params["id"], req.params["boardIdParam"], req.body);
	res.status(200).json(Task.toResponse(updateTask));
})

router.route('/:id').delete(async (req: Request, res: Response) => {
	await tasksService.removeTask(req.params["id"], req.params["boardIdParam"]);
	res.status(204).json();
})

export default router;