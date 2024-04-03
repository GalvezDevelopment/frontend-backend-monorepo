import { IsBoolean, IsNotEmpty, Length } from "class-validator";

export class UpdateTaskDto {
    @IsNotEmpty()
    @Length(36)
    id: string;
    @IsNotEmpty()
    name: string;
    @IsBoolean()
    isActive: boolean;
}