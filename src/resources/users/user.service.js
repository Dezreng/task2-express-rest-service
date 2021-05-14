const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const get = (id) => usersRepo.get(id);

const add = (reqBody) => usersRepo.add(reqBody);

const update = (id, params) => usersRepo.update(id, params);

const remove = (id) => usersRepo.remove(id);

module.exports = { getAll, get, add, update, remove };
