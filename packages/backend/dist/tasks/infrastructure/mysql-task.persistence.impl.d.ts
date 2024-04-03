import { TaskPersistence } from '../application/task.persistence';
import { Task } from '../domain/task.model';
import { TaskEntity } from './entities/task.entity';
import { Repository } from 'typeorm';
import { CreateTaskDto } from '../application/dtos/create-task.dto';
import { UpdateTaskDto } from '../application/dtos/update-task.dto';
export declare class MysqlTaskPersistenceImpl implements TaskPersistence {
    private taskRepository;
    constructor(taskRepository: Repository<TaskEntity>);
    getAll(): Promise<Task[]>;
    getById(taskId: string): Promise<Task>;
    save(task: CreateTaskDto | UpdateTaskDto): Promise<Task>;
    remove(taskId: string): Promise<boolean>;
}
