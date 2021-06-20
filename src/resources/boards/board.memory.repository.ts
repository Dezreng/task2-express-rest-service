import DB from '../../bd/inMemoryRepositoryDB';
import { TypeBoardAdd, TypeBoardUpdate } from '../../common/interfacesAndTypeDB';
import Board from './board.model';
import ErrorNotFound from '../../error/errorNotFound';

const TABLE_NAME = 'Boards'

const getAll = async () => DB.getAllEntity(TABLE_NAME);

const get = async (id: string) => {
	const board = DB.getEntity(TABLE_NAME, id)

	if(!board){
		throw new ErrorNotFound("Not Found!");
	}
	return board;
};

const add = async (reqBody: TypeBoardAdd) => {
	const board = new Board(reqBody);
	return DB.addEntity(TABLE_NAME, board);
};

const update = async (id: string, params: TypeBoardUpdate) => DB.updateEntity(TABLE_NAME, id, params);

const remove = async (id: string) => DB.removeEntity(TABLE_NAME, id);

export default { getAll, get, add, update, remove };