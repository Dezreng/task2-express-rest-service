import { v4 as uuidv4 } from 'uuid'
import Column from './board.column';

export default class Board {
	public id: string;
	public title: string;
	public columns: Column[] | null;

  constructor({
    id = uuidv4(),
    title = 'Board',
		columns = null,
  }: {id?: string; title?: string; columns?: {title: string; order:number}[] | null} = {}) {
    this.id = id;
    this.title = title;
		this.columns = columns.length !== null ? columns.map((col: {title: string, order: number}) => new Column(col)) : [];
  }

  static toResponse(board: Board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}
