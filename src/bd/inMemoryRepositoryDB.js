const db = {
	Users: [],
	Boards: [],
	Tasks: [],

	/**
	 * Updating tasks when deleting a user
	 * @param {object} user The object class User
	 */
	fixUsersStructure: ( user ) => {
		if(user){
			db.Tasks.map(task => {
				const taskUser = task;
				taskUser.userId = task.userId === user.id ? null : task.userId;
				return taskUser;
			})
		}
	},

	/**
	 * Updating tasks when deleting a board
	 * @param {object} board The object class Board
	 */
	fixBoardsStructure: ( board ) => {
		if(board){
			db.Tasks = db.Tasks.filter(task => task.boardId !== board.id )
		}
	}
};

/**
 * Requesting all entities from the database
 * @param {stirng} tableName The name table database
 * @returns {Array} return array entity
 */
const getAll = tableName => db[tableName];

/**
 * Requesting all tasks from the database
 * @param {string} tableName The name table database
 * @param {string} idBoard The id board
 * @returns {Array} return array tasks
 */
const getAllTask = (tableName, idBoard) => {
	const getAllTaskBoard = db[tableName].filter(task => task.boardId === idBoard);
	return getAllTaskBoard;
};

/**
 * Request for one entity from the database
 * @param {string} tableName The name table database
 * @param {string} id The id entity
 * @returns {object | undefined} return entity
 */
const get = (tableName, id) => {
	const entitie = db[tableName].find(entity => entity.id === id);
	return entitie;
};

/**
 * Request for task from the database
 * @param {string} tableName The name table database
 * @param {string} idTask The id task
 * @param {string} idBoard The id board
 * @returns {object | undefined} return task 
 */
const getTask = (tableName, idTask, idBoard) => {
	const entitie = db[tableName].find(task => task.id === idTask && task.boardId === idBoard);
	return entitie;
}

/**
 * Removing an entity from the base
 * @param {string} tableName The name table database
 * @param {stirng} id The id entity
 */
const remove = ( tableName, id ) => {
	const entity = get(tableName, id)

	if (entity) {
		db[`fix${tableName}Structure`](entity);
		db[tableName] = db[tableName].filter(user => user !== entity);
	}
};

/**
 * Removing an task from the base
 * @param {string} tableName The name table database
 * @param {string} idTask The id task
 * @param {string} idBoard The id board
 */
const removeTask = ( tableName, idTask, idBoard ) => {
	const entity = getTask(tableName, idTask, idBoard);

	db[tableName] = db[tableName].filter(task => task !== entity);
};

/**
 * Adding an entity to databases
 * @param {stirng} tableName The name table database
 * @param {object} obj The new Entity
 * @returns {object} return new Entity
 */
const add = (tableName, obj) => {
	db[tableName].push(obj);

	return get(tableName, obj.id);
};

/**
 * Updating an entity in the database
 * @param {string} tableName The name table database
 * @param {string} id The id entity
 * @param {object} params The parametrs for chang entity
 * @returns {object} return update entity
 */
const update = async (tableName, id, params) => {
	const oldEntity = get(tableName, id);

	if (oldEntity) {
		Object.assign(db[tableName][db[tableName].indexOf(oldEntity)], params)
	}

	return get(tableName, id);
};

/**
 * Updating an task in the database
 * @param {string} tableName The name table database
 * @param {string} idTask The id task
 * @param {string} idBoard The id board
 * @param {object} params The parametrs for chang task
 * @returns {object} return update task
 */
const updateTask = async (tableName, idTask, idBoard, params) => {
	const oldEntity = getTask(tableName, idTask, idBoard);

	if (oldEntity) {
		Object.assign(db[tableName][db[tableName].indexOf(oldEntity)], params)
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