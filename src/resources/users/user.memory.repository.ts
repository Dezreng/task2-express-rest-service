// import DB from '../../bd/inMemoryRepositoryDB';
// import User from './user.model';
import User from '../../entity/user.model'
import { TypeUserAdd, TypeUserUpdate } from '../../common/interfacesAndTypeDB';

// const TABLE_NAME = 'Users';

const getAllUsers = async () => {
	const users = await User.find();
	return users;
};

const getUserId = async ( id: string ) => {
	const user = await User.findOne(id);
	return user;
};

const addUser = async ( reqBody: TypeUserAdd ) => {
	const newUser = User.create(reqBody);
	await User.save(newUser);
	const res = await getUserId(newUser.id);
	return res;
};

const updateUser = async ( id: string, params: TypeUserUpdate ) => {
	const user = await getUserId(id);
	User.merge(user, params);
	const res = await User.save(user);
	return res;
};

const removeUser = async ( id: string ) => {
	const res = await User.delete(id);
	return res;
};

export default { getAllUsers, getUserId, addUser, updateUser, removeUser };
