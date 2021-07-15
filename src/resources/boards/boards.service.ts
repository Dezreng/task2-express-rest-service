import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board) private tasksRepository: Repository<Board>,
  ) {}

  async create(createBoardDto: CreateBoardDto) {
    if (createBoardDto === undefined) {
      throw new HttpException(
        'NOT FOUND PARAMS FOR CREATE',
        HttpStatus.BAD_REQUEST,
      );
    }
    const board = this.tasksRepository.create(createBoardDto);
    const newBoard = await this.tasksRepository.save(board);
    return newBoard;
  }

  async findAll() {
    return await this.tasksRepository.find({ relations: ['columns'] });
  }

  async findOne(id: string) {
    const board = await this.tasksRepository.findOne(id, {
      relations: ['columns'],
    });

    if (!board) {
      throw new HttpException('NOT FOUND USER', HttpStatus.NOT_FOUND);
    }

    return board;
  }

  async update(id: string, updateBoardDto: UpdateBoardDto) {
    if (updateBoardDto === undefined) {
      throw new HttpException(
        'NOT FOUND PARAMS FOR CREATE',
        HttpStatus.BAD_REQUEST,
      );
    }
    const board = await this.findOne(id);
    this.tasksRepository.merge(board, updateBoardDto);
    await this.tasksRepository.save(board);
    return await this.findOne(id);
  }

  async remove(id: string) {
    const board = await this.findOne(id);

    if (!board) {
      throw new HttpException('NOT FOUND BOARD', HttpStatus.NOT_FOUND);
    }

    await this.tasksRepository.delete(board.id);
  }
}
