import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Board from "./board.model";

@Entity()
export default class Columns extends BaseEntity {

	@PrimaryGeneratedColumn('uuid')
	id!: string;

	@Column()
	title: string;

	@Column()
	order!: number;

	@ManyToOne(() => Board, board => board.columns, {
		onDelete: 'CASCADE',
	})
  board: Board;
}