import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export default class User extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id!: string;

	@Column({ type: 'varchar', length: 50 })
	name: string;

	@Column({type: 'varchar', length: 100})
	login: string;

	@Column({type: 'varchar', length: 150})
	password: string;

  static toResponse(user: User) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}