import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    if (createUserDto === undefined) {
      throw new HttpException(
        'NOT_FOUND_PARAMS_FOR_CREATE',
        HttpStatus.NO_CONTENT,
      );
    }
    const hashPassword = await bcrypt.hash(createUserDto.password, 5);
    const newUser = this.usersRepository.create({
      ...createUserDto,
      password: hashPassword,
    });
    const user = await this.usersRepository.save(newUser);
    return user;
  }

  async findAll() {
    const users = await this.usersRepository.find();
    return users;
  }

  async findOne(id: string) {
    const user = await this.usersRepository.findOne(id);
    if (!user) {
      throw new HttpException('NOT_FOUND_USER', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    if (updateUserDto === undefined) {
      throw new HttpException(
        'NOT_FOUND_PARAMS_FOR_UPDATE',
        HttpStatus.NO_CONTENT,
      );
    }
    const upParams = updateUserDto;
    if (upParams.password) {
      upParams.password = await bcrypt.hash(upParams.password, 5);
    }
    const user = await this.findOne(id);
    this.usersRepository.merge(user, upParams);
    const upUser = await this.usersRepository.save(user);
    return upUser;
  }

  async remove(id: string) {
    const user = await this.findOne(id);

    if (!user) {
      throw new HttpException('NOT_FOUND_USER', HttpStatus.NOT_FOUND);
    }

    await this.usersRepository.delete(user.id);
  }

  async getUserByLogin(login: string) {
    const user = await this.usersRepository.findOne({ where: { login } });
    return user;
  }
}
