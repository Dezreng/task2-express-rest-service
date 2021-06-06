import { Router, Request, Response } from 'express';
import { TypeEntity } from '../../common/interfacesAndTypeDB';
import Task from './task.model';
import tasksService from './task.service';

const router = Router({ mergeParams: true });

router.route('/').get(async (req: Request, res: Response): Promise<void> => {
  const tasks: Array<Task> = await tasksService.getAllTask(req.params["boardIdParam"]);
  res.status(200).json(tasks.map(Task.toResponse));
});

router.route('/:id').get(async (req: Request, res: Response, next): Promise<void> => {
	await tasksService.getTask(req.params["id"], req.params["boardIdParam"]).then(task => {
		res.status(200).json(Task.toResponse((task as Task)));
	}).catch(next);
});

router.route('/').post(async (req: Request, res: Response): Promise<void> => {
	const task: Task | TypeEntity = await tasksService.add(req.body, req.params["boardIdParam"]);
	res.status(201).json(Task.toResponse((task as Task)));

})

router.route('/:id').put(async (req: Request, res: Response): Promise<void> => {
	const updateTask: Task = await tasksService.updateTask(req.params["id"], req.params["boardIdParam"], req.body);
	res.status(200).json(Task.toResponse(updateTask));
})

router.route('/:id').delete(async (req: Request, res: Response): Promise<void> => {
	await tasksService.removeTask(req.params["id"], req.params["boardIdParam"]);
	res.status(204).json();
})

export default router;