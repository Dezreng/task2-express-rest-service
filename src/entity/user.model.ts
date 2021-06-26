import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export default class User extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id!: string;

	@Column({length: 50})
	name!: string;

	@Column({length: 50})
	login!: string;

	@Column({length: 50})
	password!: string;

  static toResponse(user: User) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}