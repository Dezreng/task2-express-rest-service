const { v4: uuidv4 } = require('uuid');

class Colum {
  constructor({
    id = uuidv4(),
    title = 'COLUM',
		order = 0
  } = {}) {
    this.id = id;
    this.title = title;
		this.order = order;
  }

}

module.exports = Colum;