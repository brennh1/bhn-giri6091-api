import { Inject, Injectable } from "@nestjs/common";
import type { ITaskRepository} from "../domain/task.repository.interface";
import { ITaskRepositoryToken } from "../domain/task.repository.interface";

//! Capa de aplicacion (caso de uso)
@Injectable()
export class CreateTaskUseCase{
    constructor(
        @Inject(ITaskRepositoryToken)
        private readonly taskRepository: ITaskRepository,
    ){}

}