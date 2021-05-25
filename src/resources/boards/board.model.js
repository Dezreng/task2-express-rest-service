const { v4: uuidv4 } = require('uuid');
const Colum = require('./board.colum');

/** Class representing a Board */
class Board {
	/**
	 * Create a Board
	 * @param {object} param0 The object params for create Board
	 */
  constructor({
    id = uuidv4(),
    title = 'BOARD',
		columns = null,
  } = {}) {
    this.id = id;
    this.title = title;
		this.columns = columns !== null ? columns.map(col => new Colum(col)) : null;
  }

	/**
	 * Transforming a board for a response
	 * @param {object} board The entity Board
	 * @returns {object} return the required fields
	 */
  static toResponse(board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

module.exports = Board;