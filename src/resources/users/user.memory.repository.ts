import DB from '../../bd/inMemoryRepositoryDB';
import User from './user.model';
import { TypeUserAdd, TypeUserUpdate } from '../../common/interfacesAndTypeDB';

const TABLE_NAME = 'Users';

const getAll = async () => DB.getAllEntity(TABLE_NAME);

const get = async ( id: string ) => DB.getEntity(TABLE_NAME, id);

const add = async ( reqBody: TypeUserAdd ) => {
	const user = new User(reqBody);
	return DB.addEntity(TABLE_NAME, user);
};

const update = async ( id: string, params: TypeUserUpdate ) => DB.updateEntity(TABLE_NAME, id, params);

const remove = async ( id: string ) => DB.removeEntity(TABLE_NAME, id);

export default { getAll, get, add, update, remove };
