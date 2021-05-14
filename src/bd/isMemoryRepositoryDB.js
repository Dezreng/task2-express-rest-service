const User = require('../resources/users/user.model');

const db = {
	Users: [new User(), {id:'1', name:'1', login: '1', password: 'eefw'}, {id: '2', name:'2', login: '2', password: 'eefw'}],
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
	fixBoardsStructure: ( board ) => {
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