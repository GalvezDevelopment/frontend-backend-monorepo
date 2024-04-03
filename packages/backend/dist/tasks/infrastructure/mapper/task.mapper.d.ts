import { Task } from "src/tasks/domain/task.model";
import { TaskEntity } from "../entities/task.entity";
export declare class TaskMapper {
    static fromEntityToModel({ id, name, isActive, creationDate }: TaskEntity): Task;
}
