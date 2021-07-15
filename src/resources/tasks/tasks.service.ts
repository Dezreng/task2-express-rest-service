import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private tasksRepository: Repository<Task>,
  ) {}

  async create(createTaskDto: CreateTaskDto, boardId: string) {
    if (createTaskDto === undefined) {
      throw new HttpException(
        'NOT PARAMS FOR CREATE TASK',
        HttpStatus.BAD_REQUEST,
      );
    }
    const newTask = this.tasksRepository.create({ ...createTaskDto, boardId });
    const task = await this.tasksRepository.save(newTask);
    return task;
  }

  async findAll(boardId: string) {
    return await this.tasksRepository.find({
      where: { boardId },
      loadRelationIds: true,
    });
  }

  async findOne(id: string, boardId: string) {
    const task = await this.tasksRepository.findOne(id, {
      where: { boardId },
      loadRelationIds: true,
    });

    if (!task) {
      throw new HttpException('NOT FOUND TASK', HttpStatus.NOT_FOUND);
    }

    return task;
  }

  async update(id: string, boardId: string, updateTaskDto: UpdateTaskDto) {
    if (updateTaskDto === undefined) {
      throw new HttpException(
        'NOT PARAMS FOR UPDATE TASK',
        HttpStatus.BAD_REQUEST,
      );
    }
    const task = await this.findOne(id, boardId);
    this.tasksRepository.merge(task, updateTaskDto);
    const upTask = await this.tasksRepository.save(task);
    return upTask;
  }

  async remove(id: string, boardId: string) {
    const task = await this.findOne(id, boardId);

    if (!task) {
      throw new HttpException('NOT FOUND TASK', HttpStatus.NOT_FOUND);
    }

    await this.tasksRepository.delete(task.id);
  }
}
