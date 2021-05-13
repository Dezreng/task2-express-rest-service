const db = {
	Users: [{id:"1", name:'1', login: '1', password: 'eew'}, {id:2, name:'2', login: '2', password: 'eefw'}],
	Boards: [],
	Tasks: [],
	fixUsersStructure: ( user ) => {
		if(user){
			db.Tasks.filter(task => task).forEach(task => {
				// eslint-disable-next-line no-param-reassign
				task.userId = task.userId === user.id ? null : task.userId
			});
		}
	},
	fixBoardStructure: ( board ) => {
		if(board){
			db.Tasks.filter( task => task ).forEach(task => {
				db.Tasks[db.Tasks.indexOf(task)] = undefined
			})
		}
	}
};

const getAll = tableName => db[tableName];

const get = (tableName, id) => {
	const entities = db[tableName].filter(entity => entity.id === id);

	if (entities.length > 1) {
		console.error(`The DB data is damaged, table: ${tableName}. Entuty ID: ${id}`)
		throw Error('The DB data is wrong!');
	}

	return entities[0];
};

const remove = ( tableName, id ) => {
	const entity = get(tableName, id)
	if (entity) {
		db[`fix${tableName}Structure`](entity);
		const index = db[tableName].indexOf(entity);
		db[tableName] = [
			...db[tableName].slice(0, index),
			...(db[tableName].length > index + 1
				? db[tableName].slice(index + 1) : [])
		];
	}

	return entity;
};

const add = (tableName, entity) => {
	db[tableName].push(entity);

	return get(tableName, entity.id);
};

const update = async (tableName, id, params) => {
	const oldEntity = get(tableName, id);
	// console.log(oldEntity);
	if (oldEntity) {
		console.log({ ...params })
		db[tableName][db[tableName].indexOf(oldEntity)] = { ...params };
		console.log(db.Users);
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