import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import type { ITaskRepository } from "../domain/task.repository.interface";
import { ITaskRepositoryToken } from "../domain/task.repository.interface";
import { Task } from "../domain/task.entity";

@Injectable()
export class GetTaskByIdUseCase{

    constructor(
        @Inject(ITaskRepositoryToken)
        private readonly taskRepository: ITaskRepository
    ){}

    async execute(id: string): Promise<Task> {
        const task = await this.taskRepository.findById(id);
        if (!task)
            throw new NotFoundException ('La tarea ${id} no exite' );

        return task;

    }

}