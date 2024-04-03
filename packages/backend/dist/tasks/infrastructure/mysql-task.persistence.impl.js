"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlTaskPersistenceImpl = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const task_entity_1 = require("./entities/task.entity");
const typeorm_2 = require("typeorm");
const task_mapper_1 = require("./mapper/task.mapper");
let MysqlTaskPersistenceImpl = class MysqlTaskPersistenceImpl {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async getAll() {
        const tasks = await this.taskRepository.find();
        return tasks.map(task_mapper_1.TaskMapper.fromEntityToModel.bind(this));
    }
    async getById(taskId) {
        const entity = await this.taskRepository.findOneBy({ id: taskId });
        if (entity)
            return task_mapper_1.TaskMapper.fromEntityToModel(entity);
        throw new common_1.HttpException('Task does not exist', common_1.HttpStatus.NOT_FOUND);
    }
    async save(task) {
        const entity = { ...task };
        return task_mapper_1.TaskMapper.fromEntityToModel(await this.taskRepository.save(entity));
    }
    async remove(taskId) {
        const exist = await this.getById(taskId);
        await this.taskRepository.delete({ id: taskId });
        return Promise.resolve(true);
    }
};
exports.MysqlTaskPersistenceImpl = MysqlTaskPersistenceImpl;
exports.MysqlTaskPersistenceImpl = MysqlTaskPersistenceImpl = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(task_entity_1.TaskEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MysqlTaskPersistenceImpl);
//# sourceMappingURL=mysql-task.persistence.impl.js.map