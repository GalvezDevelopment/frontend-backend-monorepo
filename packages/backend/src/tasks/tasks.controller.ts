import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateTaskDto } from './application/dtos/create-task.dto';
import { UpdateTaskDto } from './application/dtos/update-task.dto';
import { Task } from './domain/task.model';
import { TaskRepositoryImpl } from './infrastructure/task.repository.impl';

@Controller('tasks')
export class TasksController {
    constructor(private taskRepository: TaskRepositoryImpl) { }

    @Get()
    async getAll(): Promise<Task[]> {
        return this.taskRepository.getAll();
    }

    @Get(':id')
    async getById(@Param(':id') taskId: string): Promise<Task> {
        return this.taskRepository.getById(taskId);
    }

    @Post()
    async add(@Body() createTask: CreateTaskDto): Promise<Task> {
        return this.taskRepository.save(createTask);
    }

    @Patch()
    async update(@Body() task: UpdateTaskDto): Promise<Task> {
        return this.taskRepository.save(task);
    }

    @Delete(':id')
    async remove(@Param('id') taskId: string): Promise<boolean> {
        return this.taskRepository.remove(taskId)
    }
}
