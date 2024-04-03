"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskMapper = void 0;
class TaskMapper {
    static fromEntityToModel({ id, name, isActive, creationDate }) {
        return { id, name, isActive, creationDate };
    }
}
exports.TaskMapper = TaskMapper;
//# sourceMappingURL=task.mapper.js.map