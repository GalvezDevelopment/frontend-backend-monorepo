import { IsNotEmpty, MaxLength } from "class-validator";

export class CreateTaskDto {
    @IsNotEmpty()
    @MaxLength(100)
    name: string;
}