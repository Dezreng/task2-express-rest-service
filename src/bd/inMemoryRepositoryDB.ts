import User from "../resources/users/user.model";
import Task from "../resources/tasks/task.model";
import Board from "../resources/boards/board.model";
import { Idb, TypeEntity, TypeArr, TypeTaskUpdate, TypeBoardUpdate, TypeUserUpdate} from "../common/interfacesAndTypeDB";

const db: Idb = {
	Users: [],
	Boards: [],
	Tasks: [],

	fixUsersStructure: ( user: User ) => {
		if(user){
			db.Tasks.map(task => {
				const taskUser = task;
				taskUser.userId = task.userId === user.id ? null : task.userId;
				return taskUser;
			})
		}
	},

	fixBoardsStructure: ( board: Board ) => {
		if(board){
			db.Tasks = db.Tasks.filter(task => task.boardId !== board.id )
		}
	}
};

const getAllEntity = ( tableName: string ): TypeArr => (db[tableName] as TypeArr);

const getAllTask = (tableName: string, idBoard: string): Task[] => {
	const getAllTaskBoard = (db[tableName] as Task[]).filter(( task: Task ) => task.boardId === idBoard);
	return getAllTaskBoard;
};

const getEntity = (tableName: string, id: string): TypeEntity => {
	const entitie = (db[tableName] as TypeArr).find((entity: TypeEntity) => entity.id === id);
	return entitie;
};

const getTask = (tableName: string, idTask: string, idBoard: string): Task => {
	const entitie = (db[tableName] as Task[]).find(( task: Task ) => task.id === idTask && task.boardId === idBoard);
	return entitie;
}

const removeEntity = ( tableName: string, id: string ): void => {
	const entity = getEntity(tableName, id);

	if (entity && tableName === "Users") {
		db.fixUsersStructure((entity as User));
	} else if(entity) {
		db.fixBoardsStructure((entity as Board));
	}

	db[tableName] = (db[tableName] as TypeArr).filter(( entityT: TypeEntity ) => entityT !== entity);
};

const removeTask = ( tableName: string, idTask: string, idBoard: string ): void => {
	const entity = getTask(tableName, idTask, idBoard);

	db[tableName] = (db[tableName] as Task[]).filter(( task: Task ) => task !== entity);
};

const addEntity = (tableName: string, obj: TypeEntity | Task): TypeEntity | Task => {
	(db[tableName] as Array<User|Board|Task>).push(obj);

	return tableName === "Tasks" ? getTask(tableName, obj.id, (obj as Task).boardId) : getEntity(tableName, obj.id);
};

const updateEntity = (tableName: string, id: string, params: TypeUserUpdate | TypeBoardUpdate): TypeEntity => {
	const oldEntity = getEntity(tableName, id);

	if (oldEntity) {
		Object.assign((db[tableName] as TypeArr)[(db[tableName] as TypeArr).indexOf(oldEntity)], params)
	}

	return getEntity(tableName, id);
};

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