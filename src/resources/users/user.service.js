const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const get = (id) => usersRepo.get(id);

const add = (user) => usersRepo.add(user);

const update = (id, params) => usersRepo.update(id, params);

module.exports = { getAll, get, add, update };
