import { BoardDTO  } from '../../common/interfacesAndTypeDB';
import Board from '../../entity/board.model';
import boardsRepo from './board.memory.repository';

const getAllBoards = () => boardsRepo.getAllBoards();

const getBoard = (id: string) => boardsRepo.getBoard(id);

const addBoard = (reqBody: Board) => boardsRepo.addBoard(reqBody);

const updateBoard = (id: string, params: BoardDTO ) => boardsRepo.updateBoard(id, params);

const removeBoard = (id: string) => boardsRepo.removeBoard(id);

export default { getAllBoards, getBoard, addBoard, updateBoard, removeBoard };