import { Task } from "../tasks/domain/models/task.model";
import { tasksFeatureKey } from "../tasks/infrastructure/state/task.reducer";

export interface GlobalState {
    [tasksFeatureKey]: Task[];
}