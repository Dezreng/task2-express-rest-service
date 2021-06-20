import User from "../entity/user.model"
import Task from "../entity/task.model";
import Board from "../entity/board.model";

export type UserDTO = Omit<User, 'id'>;

export type TaskDTO = Omit<Task, 'id'>;

export type BoardDTO = Omit<Board, 'id'>;

export interface errHandler extends Error {
	name: string;
  message: string;
  stack?: string;
	status?: number;
}


