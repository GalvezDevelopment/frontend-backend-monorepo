import { Task } from "src/tasks/domain/task.model";
import { TaskEntity } from "../entities/task.entity";

export class TaskMapper {
    static fromEntityToModel({ id, name, isActive, creationDate }: TaskEntity): Task {
        return { id, name, isActive, creationDate };
    }
}