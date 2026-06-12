import { Module } from "@nestjs/common";
import { TasksController } from "./controllers/tasks.controller";
import { CreateTaskUseCase } from "../application/create-task.use-case";
import { ITaskRepositoryToken } from "../domain/task.repository.interface";
import { taskRepositoryImpl } from "./persistence/task.repository.impl";
import { GetTaskByIdUseCase } from "../application/get-task-by-id.use-case";
import { DeleteTaskUseCase } from "../application/delete-task.use-case";
import { UpdateTaskUseCase } from "../application/update-task.use-case";

//! Es el que conecta todo
@Module({
    controllers:[TasksController],
    providers:[
        CreateTaskUseCase,
        GetTaskByIdUseCase,
        DeleteTaskUseCase,
        UpdateTaskUseCase,
        {
            provide: ITaskRepositoryToken,
            useClass: taskRepositoryImpl
        }
    ],
    exports:[CreateTaskUseCase]

})
export class TasksModule{}