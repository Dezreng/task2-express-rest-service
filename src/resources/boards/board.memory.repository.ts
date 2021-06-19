import { BoardDTO } from '../../common/interfacesAndTypeDB';
import Board from '../../entity/board.model';
import Task from '../../entity/task.model';
import Columns from '../../entity/column.model';
import ErrorNotFound from '../../error/errorNotFound';

const getAllBoards = async () => {
	const boards = await Board.find({ relations: ["columns"] });
	return boards;
}

const getBoard = async (id: string) => {
	const board = await Board.findOne(id, { relations: ["columns"] })

	if(!board){
		throw new ErrorNotFound("Not Found!");
	}
	return board;
};

const addBoard = async (reqBody: Board) => {
	const board = Board.create(reqBody);
	const columns = Columns.create(reqBody.columns);
	await Columns.save(columns);
	board.columns = columns;
	const res = await Board.save(board);
	return res
};

const updateBoard = async (id: string, params: BoardDTO) => {
	const upBoard = await getBoard(id);
	Board.merge(upBoard, params);
	await Board.save(upBoard);
	const res = await getBoard(id);
	return res;
};

const removeBoard = async (id: string) => {
	await Task.fixBoardsStructure(await getBoard(id));
	await Board.delete(id);
};

export default { getAllBoards, getBoard, addBoard, updateBoard, removeBoard };