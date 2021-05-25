const { v4: uuidv4 } = require('uuid');
// {console.log(typeof idTask, typeof idBoard, typeof params); return};
/** Class representing a Column */
class Colum {
	/**
	 * Create a Column
	 * @param {object} param0 The object params for create Column
	 */
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