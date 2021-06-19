import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Columns from "./column.model";


@Entity()
export default class Board extends BaseEntity {

	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	title: string;

	@OneToMany(() => Columns, column => column.board, {
		nullable: true
	})
	columns: Columns[];
}