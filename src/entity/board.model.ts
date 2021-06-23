import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Columns from "./column.model";


@Entity()
export default class Board extends BaseEntity {

	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({length: 100})
	title: string;

	@OneToMany(() => Columns, column => column.board, {
		nullable: true, cascade: true
	})
	columns: Columns[];
}