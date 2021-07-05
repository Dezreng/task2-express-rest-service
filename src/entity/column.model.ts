import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Board from "./board.model";

@Entity()
export default class Columns extends BaseEntity {

	@PrimaryGeneratedColumn('uuid')
	id!: string;

	@Column({ type: 'varchar', length: 100})
	title: string;

	@Column('integer', { default: 0 })
	order!: number;

	@ManyToOne(() => Board, board => board.columns, {
		onDelete: 'CASCADE',
	})
  board: Board;
}