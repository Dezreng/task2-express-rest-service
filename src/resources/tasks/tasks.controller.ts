import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('boards/:boardId/tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async create(
    @Body() createTaskDto: CreateTaskDto,
    @Param('boardId') boardId: string,
  ) {
    const newTask = await this.tasksService.create(createTaskDto, boardId);
    return newTask;
  }

  @Get()
  async findAll(@Param('boardId') boardId: string) {
    const task = await this.tasksService.findAll(boardId);
    return task;
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Param('boardId') boardId: string) {
    const task = await this.tasksService.findOne(id, boardId);
    return task;
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Param('boardId') boardId: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    const task = await this.tasksService.update(id, boardId, updateTaskDto);
    return task;
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Param('boardId') boardId: string) {
    await this.tasksService.remove(id, boardId);
    return;
  }
}
