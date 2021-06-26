import { Router, Request, Response } from 'express';
import boardService from './board.service';

const router = Router();

router.route('/').get(async (_req: Request, res: Response): Promise<void> => {
  const board = await boardService.getAllBoards();
  res.status(200).json(board);
});

router.route('/:id').get(async (req: Request, res: Response, next): Promise<void> => {
  await boardService.getBoard(req.params['id']).then(board => {
		res.status(200).json(board);
	}).catch(next);
});

router.route('/').post(async (req: Request, res: Response): Promise<void> => {
	const board = await boardService.addBoard(req.body);
	res.status(201).json(board)
})

router.route('/:id').put(async (req: Request, res: Response): Promise<void> => {
	const updateBoard = await boardService.updateBoard(req.params['id'], req.body);
	res.status(200).json(updateBoard);
})

router.route('/:id').delete(async (req: Request, res: Response): Promise<void> => {
	await boardService.removeBoard(req.params['id']);
	res.status(204).json();
})

export default router;