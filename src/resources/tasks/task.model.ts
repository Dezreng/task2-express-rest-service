import { v4 as uuidv4 } from 'uuid'

/** Class representing a Task */
export default class Task {
	public id: string;
	public title: string;
	public order: number;
	public description: string;
	public userId: string | null;
	public boardId: string | null;	
	public columnId: string | null;	
	/**
	 * Create a Task
	 * @param {object} param0 The object params for create Task
	 */
  constructor({
    id = uuidv4(),
    title = 'TITLE',
    order = 0,
    description = 'description',
		userId = null,
		boardId = null,
		columnId = null
  }: { id?: string;
		title?: string;
		order?: number;
		description?: string;
		userId?: string | null;
		boardId?: string | null;
		columnId?: string | null} = {}) {
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
	 * @param {object} task The entity Task
	 * @returns {object} return the required fields
	 */
  static toResponse(task: Task) {
    const { id, title, order, description, userId, boardId, columnId } = task;
    return { id, title, order, description, userId, boardId, columnId };
  }
}