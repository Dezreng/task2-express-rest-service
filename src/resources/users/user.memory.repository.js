const DB = require('../../bd/isMemoryRepositoryDB');

const TABLE_NAME = 'Users'

const getAll = async () => DB.getAll(TABLE_NAME);

const get = async (id) => DB.get(TABLE_NAME, id);

const add = async (user) => DB.add(TABLE_NAME, user);

const update = async (id, params) => DB.update(TABLE_NAME, id, params);

module.exports = { getAll, get, add, update };
