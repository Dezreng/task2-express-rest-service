const db = {
	Users: [],
	Boards: [],
	Tasks: [],
	fixUsersStructure: ( user ) => {
		if(user){
			db.Tasks.map(task => {
				const taskUser = task;
				taskUser.userId = task.userId === user.id ? null : task.userId;
				return taskUser;
			})
		}
	},
	fixBoardsStructure: ( board ) => {
		if(board){
			db.Tasks = db.Tasks.filter(task => task.boardId !== board.id )
		}
	}
};

const getAll = tableName => db[tableName];

const getAllTask = (tableName, idBoard) => {
	const getAllTaskBoard = db[tableName].filter(task => task.boardId === idBoard);

	return getAllTaskBoard;
};

const get = (tableName, id) => {
	const entitie = db[tableName].find(entity => entity.id === id);

	return entitie;
};

const getTask = (tableName, idTask, idBoard) => {
	const entitie = db[tableName].find(task => task.id === idTask && task.boardId === idBoard);

	return entitie;
}

const remove = ( tableName, id ) => {
	const entity = get(tableName, id)
	if (entity) {
		db[`fix${tableName}Structure`](entity);
		db[tableName] = db[tableName].filter(user => user !== entity);
	}

	return entity;
};

const removeTask = ( tableName, idTask, idBoard ) => {
	const entity = getTask(tableName, idTask, idBoard);

	db[tableName] = db[tableName].filter(task => task !== entity);

	return entity;
};

const add = (tableName, obj) => {
	db[tableName].push(obj);

	return get(tableName, obj.id);
};

const update = async (tableName, id, params) => {
	const oldEntity = get(tableName, id);

	if (oldEntity) {
		Object.assign(db[tableName][db[tableName].indexOf(oldEntity)], {...params})
	}

	return get(tableName, id);
};

const updateTask = async (tableName, idTask, idBoard, params) => {
	const oldEntity = getTask(tableName, idTask, idBoard);

	if (oldEntity) {
		Object.assign(db[tableName][db[tableName].indexOf(oldEntity)], {...params})
	}

	return getTask(tableName, idTask, idBoard);
};

module.exports = { 
	getAll,
	getAllTask,
	get,
	getTask,
	remove,
	removeTask,
	add,
	update,
	updateTask
 }