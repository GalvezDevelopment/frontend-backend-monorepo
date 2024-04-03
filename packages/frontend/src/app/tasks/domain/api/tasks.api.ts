import { Observable } from "rxjs";
import { Task } from "../models/task.model";

export abstract class TasksApi {
    abstract add(task: Task): Observable<Task>;
    abstract getAll(): Observable<Task[]>;
    abstract getById(id: string): Observable<Task>;
    abstract modify(task: Task): Observable<Task>;
    abstract removeById(id: string): Observable<boolean>;
}