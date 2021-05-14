const router = require('express').Router();
const Board = require('./board.model');
const usersService = require('./board.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.status(200).json(users.map(Board.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.get(req.params.id);
	if(!user){
		res.status(404).json();
	} else {
		res.status(200).json(Board.toResponse(user));
	}
});

router.route('/').post(async (req, res) => {
	const user = await usersService.add(req.body);
	res.status(201).json(Board.toResponse(user))
})

router.route('/:id').put(async (req, res) => {
	const updateUser = await usersService.update(req.params.id, req.body);
	res.status(200).json(Board.toResponse(updateUser));
})

router.route('/:id').delete(async (req, res) => {
	await usersService.remove(req.params.id);
	res.status(204).json();
})

module.exports = router;