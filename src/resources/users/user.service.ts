import usersRepo from './user.memory.repository';
import { UserDTO } from '../../common/interfacesAndTypeDB';
import User from '../../entity/user.model';

const getAllUsers = () => usersRepo.getAllUsers();

const getUserId = ( id: string ) => usersRepo.getUserId(id);

const addUser = (reqBody: User ) => usersRepo.addUser(reqBody);

const updateUser = ( id: string, params: UserDTO ) => usersRepo.updateUser(id, params);

const removeUser = ( id: string ) => usersRepo.removeUser(id);

export default { getAllUsers, getUserId, addUser, updateUser, removeUser };
