import { Columns } from '../entities/column.entity';

export class CreateBoardDto {
  title: string;
  columns: Columns[];
}
