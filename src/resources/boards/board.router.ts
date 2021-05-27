import { Router } from 'express';
import Board from './board.model';
import boardService from './board.service';

const router = Router();

router.route('/').get(async (_req, res) => {
  const board = await boardService.getAll();
  res.status(200).json((board as Board[]).map(Board.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const board = await boardService.get(req.params.id);
	if(!board){
		res.status(404).json();
	} else {
		res.status(200).json(Board.toResponse((board as Board)));
	}
});

router.route('/').post(async (req, res) => {
	const board = await boardService.add(req.body);
	res.status(201).json(Board.toResponse((board as Board)))
})

router.route('/:id').put(async (req, res) => {
	const updateBoard = await boardService.update(req.params.id, req.body);
	res.status(200).json(Board.toResponse((updateBoard as Board)));
})

router.route('/:id').delete(async (req, res) => {
	await boardService.remove(req.params.id);
	res.status(204).json();
})

export default router;