import { Task } from "../../domain/models/task.model";
import { TaskDto } from "./task.dto";

export class TaskMapper {
    static fromDtoToModel(dto: TaskDto): Task {
        return { ...dto } as Task;
    }
}