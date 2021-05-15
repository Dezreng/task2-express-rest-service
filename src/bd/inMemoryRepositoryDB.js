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
	},
	fixTasksStructure: () => {}
};

const getAll = tableName => db[tableName];

const get = (tableName, id) => {
	const entitie = db[tableName].find(entity => entity.id === id);

	return entitie;
};

const remove = ( tableName, id ) => {
	const entity = get(tableName, id)
	if (entity) {
		db[`fix${tableName}Structure`](entity);
		db[tableName] = db[tableName].filter(user => user !== entity);
	}

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

module.exports = { 
	getAll,
	get,
	remove,
	add,
	update
 }