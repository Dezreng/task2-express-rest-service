import { Router, Request, Response } from 'express';
import User from './user.model';
import usersService from './user.service';
import { TypeArr, TypeEntity } from "../../common/interfacesAndTypeDB";
import Task from '../tasks/task.model';

const router = Router()

router.route('/').get(async (_req: Request, res: Response): Promise<void> => {
  const users: TypeArr = await usersService.getAll();
  res.status(200).json((users as User[]).map(User.toResponse));
});

router.route('/:id').get(async (req: Request, res: Response): Promise<void> => {
  const user: TypeEntity = await usersService.get(req.params["id"]);
  res.status(200).json(User.toResponse((user as User)));
});

router.route('/').post(async (req: Request, res: Response): Promise<void> => {
	const user: Task | TypeEntity  = await usersService.add(req.body);
	res.status(201).json(User.toResponse((user as User)))
})

router.route('/:id').put(async (req: Request, res: Response): Promise<void> => {
	const updateUser: TypeEntity = await usersService.update(req.params["id"], req.body);
	res.status(200).json(User.toResponse((updateUser as User)));
})

router.route('/:id').delete(async (req: Request, res: Response): Promise<void> => {
	await usersService.remove(req.params["id"]);
	res.status(204).json();
})

export default router;
