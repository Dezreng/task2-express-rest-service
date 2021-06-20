import usersRepo from './user.memory.repository';
import { TypeUserAdd, TypeUserUpdate } from '../../common/interfacesAndTypeDB';

const getAll = () => usersRepo.getAll();

const get = ( id: string ) => usersRepo.get(id);

const add = (reqBody: TypeUserAdd) => usersRepo.add(reqBody);

const update = ( id: string, params: TypeUserUpdate ) => usersRepo.update(id, params);

const remove = ( id: string ) => usersRepo.remove(id);

export default { getAll, get, add, update, remove };
