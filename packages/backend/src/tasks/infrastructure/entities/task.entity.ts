import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tasks')
export class TaskEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column({ type: 'varchar', length: 150, nullable: false })
    name: string;

    @Column({ type: 'boolean', default: true })
    isActive: boolean;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    creationDate: Date;
}