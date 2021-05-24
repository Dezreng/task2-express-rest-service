const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();

const get = (id) => boardsRepo.get(id);

const add = (reqBody) => boardsRepo.add(reqBody);

const update = (id, params) => boardsRepo.update(id, params);

const remove = (id) => boardsRepo.remove(id);

module.exports = { getAll, get, add, update, remove };