import { Inject, Injectable } from "@nestjs/common";
import type { ITaskRepository} from "../domain/task.repository.interface";
import { ITaskRepositoryToken } from "../domain/task.repository.interface";
import { Task } from "../domain/task.entity";

//! Capa de aplicacion (caso de uso)
@Injectable()
export class CreateTaskUseCase{
    constructor(
        @Inject(ITaskRepositoryToken)
        private readonly taskRepository: ITaskRepository,
    ){}

    async execute(title: string, description: string): Promise<Task> {
        const task = new Task(
            0,
            title,
            description,
            'PENDING',
            new Date(),
        );
        
        return this.taskRepository.create(task);

    }

}
