import { v4 as uuidv4 } from 'uuid'

/** Class representing a Column */
export default class Column {
	public id: string;
	public title: string;
	public order: number;

	/**
	 * Create a Column
	 * @param {object} param0 The object params for create Column
	 */
  constructor({
    id = uuidv4(),
    title = 'COLUM',
		order = 0
  }: { id?: string; title?: string; order?: number} = {}) {
    this.id = id;
    this.title = title;
		this.order = order;
  }
}
