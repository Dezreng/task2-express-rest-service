const { v4: uuidv4 } = require('uuid');
const Colum = require('./board.colum');

class Board {
  constructor({
    id = uuidv4(),
    title = 'BOARD',
		columns = null,
  } = {}) {
    this.id = id;
    this.title = title;
		this.columns = columns !== null ? columns.map(col => new Colum(col)) : null;
  }

  static toResponse(board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

module.exports = Board;