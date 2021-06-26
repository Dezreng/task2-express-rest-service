import bcrypt from 'bcrypt';
import User from '../../entity/user.model'
import { UserDTO } from '../../common/interfacesAndTypeDB';
import ErrorNotFound from '../../error/errorNotFound';

const getAllUsers = async () => {
	const users = await User.find();
	return users;
};

const getUserId = async ( id: string ) => {
	const user = await User.findOne(id);

	if(!user){
		throw new ErrorNotFound("User Not Found!");
	}

	return user;
};

const addUser = async ( reqBody: User ) => {
	const params = {
		name: reqBody.name,
		login: reqBody.login,
		password: await bcrypt.hash(reqBody.password, 10),
	};
	const newUser = User.create(params);
	const res = await User.save(newUser);
	return res;
};

const updateUser = async ( id: string, params: UserDTO ) => {
	const user = await getUserId(id);
	User.merge(user, params);
	const res = await User.save(user);
	return res;
};

const removeUser = async ( id: string ) => {
	const user = await getUserId(id);
	await User.delete(user.id);
};

export default { getAllUsers, getUserId, addUser, updateUser, removeUser };
