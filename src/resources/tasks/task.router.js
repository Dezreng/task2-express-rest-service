const router = require('express').Router({ mergeParams: true });
const Task = require('./task.model');
const usersService = require('./task.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.status(200).json(users.map(Task.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const task = await usersService.get(req.params.id);
	if(!task){
		res.status(404).json();
	} else {
		res.status(200).json(Task.toResponse(task));
	}
});

router.route('/').post(async (req, res) => {
	const {boardIdParam} = req.params;
	const { title, order, description, userId, boardId, columnId} = req.body;
	const taskObj = {
		'title': title,
		'order': order,
		'description': description,
		'userId': userId,
		'boardId' : boardId || boardIdParam,
		'columnId': columnId
	}
	const user = await usersService.add(taskObj);
	res.status(201).json(Task.toResponse(user))

})

router.route('/:id').put(async (req, res) => {
	const updateUser = await usersService.update(req.params.id, req.body);
	res.status(200).json(Task.toResponse(updateUser));
})

router.route('/:id').delete(async (req, res) => {
	await usersService.remove(req.params.id);
	res.status(204).json();
})

module.exports = router;