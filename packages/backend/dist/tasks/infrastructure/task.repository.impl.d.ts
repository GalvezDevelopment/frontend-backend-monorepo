import { TaskRepository } from '../application/task.repository';
import { Task } from '../domain/task.model';
import { MysqlTaskPersistenceImpl } from './mysql-task.persistence.impl';
import { CreateTaskDto } from '../application/dtos/create-task.dto';
import { UpdateTaskDto } from '../application/dtos/update-task.dto';
export declare class TaskRepositoryImpl implements TaskRepository {
    private taskPersistence;
    constructor(taskPersistence: MysqlTaskPersistenceImpl);
    getAll(): Promise<Task[]>;
    getById(taskId: string): Promise<Task>;
    save(task: CreateTaskDto | UpdateTaskDto): Promise<Task>;
    update(task: Task): Promise<Task>;
    remove(taskId: string): Promise<boolean>;
}
