import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../users/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userServis: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(userDTO: CreateUserDto) {
    const user = await this.validateUser(userDTO);
    return this.generateToken(user);
  }

  private async generateToken(user: User) {
    const payLoad = { id: user.id, login: user.login };
    return {
      token: this.jwtService.sign(payLoad),
    };
  }

  private async validateUser(userDTO: CreateUserDto) {
    const user = await this.userServis.getUserByLogin(userDTO.login);
    const passwordEquals = await bcrypt.compare(
      userDTO.password,
      user.password,
    );

    if (user && passwordEquals) {
      return user;
    }
    throw new UnauthorizedException({
      message: 'Некорректный логин или пароль.',
    });
  }
}
