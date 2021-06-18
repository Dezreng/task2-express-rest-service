import { Router, Request, Response } from 'express';
// import User from './user.model';
import User from '../../entity/user.model'
import usersService from './user.service';

const router = Router()

router.route('/').get(async (_req: Request, res: Response): Promise<void> => {
  const users = await usersService.getAll();
  res.status(200).json(users.map(user => User.toResponse(user)));
});

router.route('/:id').get(async (req: Request, res: Response): Promise<void> => {
  const user = await usersService.get(req.params["id"]);
  res.status(200).json(user);
});

router.route('/').post(async (req: Request, res: Response): Promise<void> => {
	const user = await usersService.add(req.body);
	res.status(201).json(User.toResponse(user));
})

router.route('/:id').put(async (req: Request, res: Response): Promise<void> => {
	const updateUser = await usersService.update(req.params["id"], req.body);
	res.status(200).json(User.toResponse(updateUser));
})

router.route('/:id').delete(async (req: Request, res: Response): Promise<void> => {
	const result = await usersService.remove(req.params["id"]);
	res.status(204).json(result);
})

export default router;
