const router = require('express').Router();
const Board = require('./board.model');
const boardService = require('./board.service');

router.route('/').get(async (req, res) => {
  const board = await boardService.getAll();
  res.status(200).json(board.map(Board.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const board = await boardService.get(req.params.id);
	if(!board){
		res.status(404).json();
	} else {
		res.status(200).json(Board.toResponse(board));
	}
});

router.route('/').post(async (req, res) => {
	const board = await boardService.add(req.body);
	res.status(201).json(Board.toResponse(board))
})

router.route('/:id').put(async (req, res) => {
	const updateBoard = await boardService.update(req.params.id, req.body);
	res.status(200).json(Board.toResponse(updateBoard));
})

router.route('/:id').delete(async (req, res) => {
	await boardService.remove(req.params.id);
	res.status(204).json();
})

module.exports = router;