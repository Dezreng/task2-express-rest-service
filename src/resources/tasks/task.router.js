const router = require('express').Router({ mergeParams: true });
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAllTask(req.params.boardIdParam);
  res.status(200).json(tasks.map(Task.toResponse));
});

router.route('/:id').get(async (req, res) => {
	const task = await tasksService.getTask(req.params.id, req.params.boardIdParam);
	if(!task){
		res.status(404).json();
	} else {
		res.status(200).json(Task.toResponse(task));
	}
});

router.route('/').post(async (req, res) => {
	const user = await tasksService.add(req.body, req.params.boardIdParam);
	res.status(201).json(Task.toResponse(user))

})

router.route('/:id').put(async (req, res) => {
	const updateUser = await tasksService.updateTask(req.params.id, req.params.boardIdParam, req.body);
	res.status(200).json(Task.toResponse(updateUser));
})

router.route('/:id').delete(async (req, res) => {
	await tasksService.removeTask(req.params.id, req.params.boardIdParam);
	res.status(204).json();
})

module.exports = router;