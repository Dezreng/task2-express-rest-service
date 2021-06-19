import { Router, Request, Response } from 'express';
import User from '../../entity/user.model'
import usersService from './user.service';

const router = Router()

router.route('/').get(async (_req: Request, res: Response): Promise<void> => {
  const users = await usersService.getAllUsers();
  res.status(200).json(users.map(user => User.toResponse(user)));
});

router.route('/:id').get(async (req: Request, res: Response): Promise<void> => {
  const user = await usersService.getUserId(req.params["id"]);
  res.status(200).json(User.toResponse(user));
});

router.route('/').post(async (req: Request, res: Response): Promise<void> => {
	const user = await usersService.addUser(req.body);
	res.status(201).json(User.toResponse(user));
})

router.route('/:id').put(async (req: Request, res: Response): Promise<void> => {
	const updateUser = await usersService.updateUser(req.params["id"], req.body);
	res.status(200).json(User.toResponse(updateUser));
})

router.route('/:id').delete(async (req: Request, res: Response): Promise<void> => {
	await usersService.removeUser(req.params["id"]);
	res.status(204).json();
})

export default router;
