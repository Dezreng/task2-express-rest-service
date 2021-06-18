// import { v4 as uuidv4 } from 'uuid'
// import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm"

// @Entity()
// export default class User extends BaseEntity {
// 	@PrimaryColumn()
// 	id: string;

// 	@Column()
// 	name:string;

// 	@Column()
// 	login: string;

// 	@Column()
// 	password: string;

//   constructor({
//     id = uuidv4(),
//     name = 'USER',
//     login = 'user',
//     password = 'P@55w0rd'
//   } = {}) {
// 		super();
//     this.id = id;
//     this.name = name;
//     this.login = login;
//     this.password = password;
//   }

//   static toResponse(user: User) {
//     const { id, name, login } = user;
//     return { id, name, login };
//   }
// }
