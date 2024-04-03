import { Task } from "../domain/task.model";
import { CreateTaskDto } from "./dtos/create-task.dto";

export abstract class TaskPersistence {
    abstract getAll(): Promise<Task[]>;
    abstract getById(taskId: string): Promise<Task>;
    abstract save(task: CreateTaskDto): Promise<Task>;
    abstract remove(taskId: string): Promise<boolean>;
}