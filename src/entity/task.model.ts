import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Board from "./board.model";
import User from "./user.model";

@Entity()
export default class Task extends BaseEntity {

	@PrimaryGeneratedColumn("uuid")
	id!: string;

	@Column({ type: 'varchar', length: 100 })
	title: string;

	@Column('integer', { default: 0 })
	order!: number

	@Column({ type: 'varchar', length: 255, default: '' })
	description!: string;

	@ManyToOne(() => User, user => user.id, {
		nullable: true,
		onDelete: 'SET NULL',
	})
	@JoinColumn({ name: 'userId' })
	userId: string | null = null;

	@ManyToOne(() => Board, board => board.id, {
		nullable: true,
		onDelete: 'CASCADE',
	})
	@JoinColumn({ name: 'boardId' })
	boardId: string;

	@Column({ nullable: true, default: null })
	columnId: string | null;
}
