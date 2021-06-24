import { BaseEntity, Column, Entity, getConnection, PrimaryGeneratedColumn } from "typeorm";
import Board from "./board.model";
import User from "./user.model";

@Entity()
export default class Task extends BaseEntity {

	@PrimaryGeneratedColumn("uuid")
	id!: string;

	@Column({ type: 'varchar', length: 50 })
	title: string;

	@Column('integer', { default: 0 })
	order!: number

	@Column({ type: 'varchar', length: 255, default: '' })
	description!: string;

	@Column({ nullable: true, default: null })
	userId!: string;

	@Column()
	boardId: string;

	@Column({ nullable: true, default: null })
	columnId!: string;

	static async fixUsersStructure(user: User){
		if(user){
			await getConnection()
			.createQueryBuilder()
    	.update(Task)
    	.set({ userId: null })
    	.where("userId = :userId", { userId: user.id })
    	.execute();
		}
	}

	static async fixBoardsStructure(board: Board){
		if ( board ) {
			await getConnection()
				.createQueryBuilder()
    		.delete()
    		.from(Task)
    		.where("boardId = :boardId", { boardId: board.id })
    		.execute();
		}
	}
}