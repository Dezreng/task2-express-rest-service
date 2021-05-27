import User from "../resources/users/user.model";
import Task from "../resources/tasks/task.model";
import Board from "../resources/boards/board.model";
import { Idb, TypeEntity, TypeArr, TypeTaskUpdate, TypeBoardUpdate, TypeUserUpdate} from "../common/interfacesAndTypeDB";

const db: Idb = {
	Users: [],
	Boards: [],
	Tasks: [],

	/**
	 * Updating tasks when deleting a user
	 * @param {object} user The object class User
	 */
	fixUsersStructure: ( user: User ) => {
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
	fixBoardsStructure: ( board: Board ) => {
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
const getAllEntity = ( tableName: string ): TypeArr => (db[tableName] as TypeArr);

/**
 * Requesting all tasks from the database
 * @param {string} tableName The name table database
 * @param {string} idBoard The id board
 * @returns {Array} return array tasks
 */
const getAllTask = (tableName: string, idBoard: string): Task[] => {
	const getAllTaskBoard = (db[tableName] as Task[]).filter(( task: Task ) => task.boardId === idBoard);
	return getAllTaskBoard;
};

/**
 * Request for one entity from the database
 * @param {string} tableName The name table database
 * @param {string} id The id entity
 * @returns {object} return entity
 */
const getEntity = (tableName: string, id: string): TypeEntity => {
	const entitie = (db[tableName] as TypeArr).find((entity: TypeEntity) => entity.id === id);
	return entitie;
};

/**
 * Request for task from the database
 * @param {string} tableName The name table database
 * @param {string} idTask The id task
 * @param {string} idBoard The id board
 * @returns {object} return task 
 */
const getTask = (tableName: string, idTask: string, idBoard: string): Task => {
	const entitie = (db[tableName] as Task[]).find(( task: Task ) => task.id === idTask && task.boardId === idBoard);
	return entitie;
}

/**
 * Removing an entity from the base
 * @param {string} tableName The name table database
 * @param {stirng} id The id entity
 * @returns {object} return delete entity
 */
const removeEntity = ( tableName: string, id: string ): void => {
	const entity = getEntity(tableName, id);

	if (entity && tableName === "Users") {
		db.fixUsersStructure((entity as User));
	} else if(entity) {
		db.fixBoardsStructure((entity as Board));
	}

	db[tableName] = (db[tableName] as TypeArr).filter(( entityT: TypeEntity ) => entityT !== entity);
};

/**
 * Removing an task from the base
 * @param {string} tableName The name table database
 * @param {string} idTask The id task
 * @param {string} idBoard The id board
 * @returns {object} return delete TypeEntity
 */
const removeTask = ( tableName: string, idTask: string, idBoard: string ): void => {
	const entity = getTask(tableName, idTask, idBoard);

	db[tableName] = (db[tableName] as Task[]).filter(( task: Task ) => task !== entity);
};

/**
 * Adding an entity to databases
 * @param {stirng} tableName The name table database
 * @param {object} obj The new TypeEntity
 * @returns {object} return new TypeEntity
 */
const addEntity = (tableName: string, obj: TypeEntity | Task): TypeEntity | Task => {
	(db[tableName] as Array<User|Board|Task>).push(obj);

	return getEntity(tableName, obj.id);
};

/**
 * Updating an entity in the database
 * @param {string} tableName The name table database
 * @param {string} id The id entity
 * @param {object} params The parametrs for chang entity
 * @returns {object} return update entity
 */
const updateEntity = (tableName: string, id: string, params: TypeUserUpdate | TypeBoardUpdate): TypeEntity => {
	const oldEntity = getEntity(tableName, id);

	if (oldEntity) {
		Object.assign((db[tableName] as TypeArr)[(db[tableName] as TypeArr).indexOf(oldEntity)], params)
	}

	return getEntity(tableName, id);
};

/**
 * Updating an task in the database
 * @param {string} tableName The name table database
 * @param {string} idTask The id task
 * @param {string} idBoard The id board
 * @param {object} params The parametrs for chang task
 * @returns {object} return update task
 */
const updateTask = (tableName: string, idTask: string, idBoard: string, params: TypeTaskUpdate): Task => {
	const oldEntity = getTask(tableName, idTask, idBoard);

	if (oldEntity) {
		Object.assign((db[tableName] as Task[])[(db[tableName] as Task[]).indexOf(oldEntity)], params)
	}

	return getTask(tableName, idTask, idBoard);
};

export default { 
	getAllEntity,
	getAllTask,
	getEntity,
	getTask,
	removeEntity,
	removeTask,
	addEntity,
	updateEntity,
	updateTask
 }