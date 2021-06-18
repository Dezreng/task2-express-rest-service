// import User from "../resources/users/user.model";
import User from "../entity/user.model"
import Task from "../resources/tasks/task.model";
import Board from "../resources/boards/board.model";

type TypeValueDB = Array<User|Board|Task> | ((user: User) => void) | ((board: Board) => void);

export type TypeEntity = User | Board;

export type TypeArr = Array<TypeEntity>;

export type TypeBoardUpdate = { title?: string; columns?: { title?: string; order?: number} };

export type TypeUserUpdate = { name?: string; login?: string; password?: string };

export type TypeTaskUpdate = { title?: string; order?: number; description?: string; userId?: string | null; columnId?: string };

export type TypeUserAdd = { id?: string; name: string; login: string; password: string };

export type TypeTaskAdd = { id?: string; title: string; order?: number; description?: string; userId?: string | null; boardId: string; columnId?: string };

export type TypeBoardAdd = { id?: string; title: string; columns?: { title: string; order: number}[] };

export interface Idb {
	[key: string]: TypeValueDB;
	Users: User[];
	Boards: Board[];
	Tasks: Task[];
	fixUsersStructure: (user: User) => void;
	fixBoardsStructure: (board: Board) => void;
}


