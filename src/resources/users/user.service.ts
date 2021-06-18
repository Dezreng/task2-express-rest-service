import usersRepo from './user.memory.repository';
import { TypeUserAdd, TypeUserUpdate } from '../../common/interfacesAndTypeDB';

const getAll = () => usersRepo.getAllUsers();

const get = ( id: string ) => usersRepo.getUserId(id);

const add = (reqBody: TypeUserAdd) => usersRepo.addUser(reqBody);

const update = ( id: string, params: TypeUserUpdate ) => usersRepo.updateUser(id, params);

const remove = ( id: string ) => usersRepo.removeUser(id);

export default { getAll, get, add, update, remove };
