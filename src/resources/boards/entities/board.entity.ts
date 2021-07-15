import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Columns } from './column.entity';

@Entity()
export class Board {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  title: string;

  @OneToMany(() => Columns, (column) => column.board, {
    cascade: true,
  })
  columns: Columns[];
}
