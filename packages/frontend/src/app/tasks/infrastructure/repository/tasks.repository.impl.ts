import { Injectable } from '@angular/core';
import { Axios } from 'axios';
import { Observable, from } from 'rxjs';
import { TasksApi } from '../../domain/api/tasks.api';
import { Task } from '../../domain/models/task.model';
import { TaskDto } from '../mapper/task.dto';
import { TaskMapper } from '../mapper/task.mapper';

@Injectable({
    providedIn: 'root'
})
export class TasksRepositoryImplementation extends TasksApi {
    private instance: Axios;

    constructor() {
        super();
        this.instance = new Axios({
            baseURL: 'http://localhost:3000/tasks/',
            headers: {
                "Content-Type": 'application/json'
            },
            responseType: 'json',
            transformResponse: [
                (data, headers) => JSON.parse(data)
            ]
        });
    }

    override add(task: Task): Observable<Task> {
        return from(this.instance.post('', JSON.stringify(task)).then(r => r.data));
    }

    override getAll(): Observable<Task[]> {
        return from(this.instance.get<TaskDto[]>('').then(r => r.data.map(TaskMapper.fromDtoToModel.bind(this))));
    }

    override getById(id: string): Observable<Task> {
        return from(this.instance.get(id).then(r => r.data));
    }

    override modify(task: Task): Observable<Task> {
        return from(this.instance.patch('', task).then(r => r.data));
    }

    override removeById(id: string): Observable<boolean> {
        return from(this.instance.delete(id).then(r => r.data));
    }
}