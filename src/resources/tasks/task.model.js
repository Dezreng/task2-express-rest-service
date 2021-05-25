const { v4: uuidv4 } = require('uuid');

/** Class representing a Task */
class Task {

	/**
	 * Create a Task
	 * @param {object} param0 
	 */
  constructor({
    id = uuidv4(),
    title = 'TITLE',
    order = 0,
    description = 'description',
		userId = null,
		boardId = null,
		columnId = null
  } = {}) {
    this.id = id;
    this.title= title;
    this.order = order;
    this.description = description;
		this.userId = userId;
		this.boardId = boardId;
		this.columnId = columnId;
  }

	/**
	 * Transforming a task for a response
	 * @param {object} task 
	 * @returns {object}
	 */
  static toResponse(task) {
    const { id, title, order, description, userId, boardId, columnId } = task;
    return { id, title, order, description, userId, boardId, columnId };
  }
}

module.exports = Task;
