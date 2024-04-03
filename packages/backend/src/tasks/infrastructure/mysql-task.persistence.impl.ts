import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TaskPersistence } from '../application/task.persistence';
import { Task } from '../domain/task.model';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from './entities/task.entity';
import { Repository } from 'typeorm';
import { TaskMapper } from './mapper/task.mapper';
import { CreateTaskDto } from '../application/dtos/create-task.dto';
import { UpdateTaskDto } from '../application/dtos/update-task.dto';

@Injectable()
export class MysqlTaskPersistenceImpl implements TaskPersistence {

    constructor(@InjectRepository(TaskEntity) private taskRepository: Repository<TaskEntity>) { }

    async getAll(): Promise<Task[]> {
        const tasks = await this.taskRepository.find();
        return tasks.map(TaskMapper.fromEntityToModel.bind(this));
    }

    async getById(taskId: string): Promise<Task> {
        const entity = await this.taskRepository.findOneBy({ id: taskId });
        if (entity) return TaskMapper.fromEntityToModel(entity);
        throw new HttpException('Task does not exist', HttpStatus.NOT_FOUND);
    }

    async save(task: CreateTaskDto | UpdateTaskDto): Promise<Task> {
        const entity = { ...task } as TaskEntity;
        return TaskMapper.fromEntityToModel(await this.taskRepository.save(entity));
    }

    async remove(taskId: string): Promise<boolean> {
        const exist = await this.getById(taskId);
        await this.taskRepository.delete({ id: taskId });
        return Promise.resolve(true);
    }
}