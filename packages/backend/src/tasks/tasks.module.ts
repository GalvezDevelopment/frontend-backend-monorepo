import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TaskRepositoryImpl } from './infrastructure/task.repository.impl';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from './infrastructure/entities/task.entity';
import { MysqlTaskPersistenceImpl } from './infrastructure/mysql-task.persistence.impl';

@Module({
  imports: [
    TypeOrmModule.forFeature([TaskEntity])
  ],
  controllers: [TasksController],
  providers: [TaskRepositoryImpl, MysqlTaskPersistenceImpl],
  exports: [TypeOrmModule]
})
export class TasksModule {}
