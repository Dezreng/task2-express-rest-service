import { TypeBoardAdd, TypeBoardUpdate } from '../../common/interfacesAndTypeDB';
import boardsRepo from './board.memory.repository';

const getAll = () => boardsRepo.getAll();

const get = (id: string) => boardsRepo.get(id);

const add = (reqBody: TypeBoardAdd) => boardsRepo.add(reqBody);

const update = (id: string, params: TypeBoardUpdate) => boardsRepo.update(id, params);

const remove = (id: string) => boardsRepo.remove(id);

export default { getAll, get, add, update, remove };