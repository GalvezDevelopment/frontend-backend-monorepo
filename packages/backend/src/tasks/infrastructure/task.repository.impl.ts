import { Injectable } from '@nestjs/common';
import { TaskRepository } from '../application/task.repository';
import { Task } from '../domain/task.model';
import { MysqlTaskPersistenceImpl } from './mysql-task.persistence.impl';
import { CreateTaskDto } from '../application/dtos/create-task.dto';
import { UpdateTaskDto } from '../application/dtos/update-task.dto';

@Injectable()
export class TaskRepositoryImpl implements TaskRepository {

    constructor(private taskPersistence: MysqlTaskPersistenceImpl) { }

    async getAll(): Promise<Task[]> {
        return await this.taskPersistence.getAll();
    }

    async getById(taskId: string): Promise<Task> {
        return await this.taskPersistence.getById(taskId);
    }

    async save(task: CreateTaskDto | UpdateTaskDto): Promise<Task> {
        return await this.taskPersistence.save(task);
    }
    
    async update(task: Task): Promise<Task> {
        return await this.save(task);
    }

    async remove(taskId: string): Promise<boolean> {
        return await this.taskPersistence.remove(taskId);
    }
}