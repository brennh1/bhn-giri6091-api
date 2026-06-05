import { CreateTaskUseCase } from "@/tasks/application/create-task.use-case";
import type { ITaskRepository } from "@/tasks/domain/task.repository.interface";
import { ITaskRepositoryToken } from "@/tasks/domain/task.repository.interface";
import { Controller, Get, Inject } from "@nestjs/common";

@Controller("tasks")
export class TasksController{

    constructor(
        private readonly createTaskUseCase: CreateTaskUseCase,
        @Inject(ITaskRepositoryToken) private readonly taskrepository: ITaskRepository
    ){}

    @Get()
    async findAll(){
        return this.taskrepository.findAll();
    }

}