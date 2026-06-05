import { Module } from "@nestjs/common";
import { TasksController } from "./controllers/tasks.controller";
import { CreateTaskUseCase } from "../application/create-task.use-case";
import { ITaskRepositoryToken } from "../domain/task.repository.interface";
import { taskRepositoryImpl } from "./persistence/task.repository.impl";

//! Es el que conecta todo
@Module({
    controllers:[TasksController],
    providers:[
        CreateTaskUseCase,
        {
            provide: ITaskRepositoryToken,
            useClass: taskRepositoryImpl
        }
    ],
    exports:[CreateTaskUseCase]

})
export class TasksModule{}