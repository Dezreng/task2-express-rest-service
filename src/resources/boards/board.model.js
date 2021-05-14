const { v4: uuidv4 } = require('uuid');
const Colum = require('./board.colum');

class Board {
  constructor({
    id = uuidv4(),
    title = 'BOARD',
		columns = [],
  } = {}) {
    this.id = id;
    this.title = title;
		this.columns = this.createColum(columns);
  }

	// eslint-disable-next-line class-methods-use-this
	createColum(option) {
		const columns = [];
		// eslint-disable-next-line no-plusplus
		for(let i = 0; i < option.length; i++){
			columns.push(new Colum(option[i]));
		}
		return columns;
	}

  static toResponse(board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

module.exports = Board;