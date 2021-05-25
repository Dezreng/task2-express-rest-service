const { v4: uuidv4 } = require('uuid');


/** Class representing a User */
class User {

	/**
	 * Create a User
	 * @param {object} param0 The object params for create User
	 */
  constructor({
    id = uuidv4(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }


	/**
	 * Transforming a user for a response
	 * @param {object} user The entity User
	 * @returns {object} return the required fields
	 */
  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
