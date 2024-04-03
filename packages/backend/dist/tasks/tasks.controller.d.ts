import { CreateTaskDto } from './application/dtos/create-task.dto';
import { UpdateTaskDto } from './application/dtos/update-task.dto';
import { Task } from './domain/task.model';
import { TaskRepositoryImpl } from './infrastructure/task.repository.impl';
export declare class TasksController {
    private taskRepository;
    constructor(taskRepository: TaskRepositoryImpl);
    getAll(): Promise<Task[]>;
    getById(taskId: string): Promise<Task>;
    add(createTask: CreateTaskDto): Promise<Task>;
    update(task: UpdateTaskDto): Promise<Task>;
    remove(taskId: string): Promise<boolean>;
}
