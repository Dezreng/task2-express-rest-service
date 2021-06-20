import { Router, Request, Response } from 'express';
import tasksService from './task.service';

const router = Router({ mergeParams: true });

router.route('/').get(async (req: Request, res: Response): Promise<void> => {
  const tasks = await tasksService.getAllTask(req.params["boardIdParam"]);
  res.status(200).json(tasks);
});

router.route('/:id').get(async (req: Request, res: Response, next): Promise<void> => {
	await tasksService.getTask(req.params["id"], req.params["boardIdParam"]).then(task => {
		res.status(200).json(task);
	}).catch(next);
});

router.route('/').post(async (req: Request, res: Response): Promise<void> => {
	const task = await tasksService.addTask(req.body, req.params["boardIdParam"]);
	res.status(201).json(task);

})

router.route('/:id').put(async (req: Request, res: Response): Promise<void> => {
	const updateTask = await tasksService.updateTask(req.params["id"], req.params["boardIdParam"], req.body);
	res.status(200).json(updateTask);
})

router.route('/:id').delete(async (req: Request, res: Response): Promise<void> => {
	await tasksService.removeTask(req.params["id"], req.params["boardIdParam"]);
	res.status(204).json();
})

export default router;