import { CreateTaskUseCase } from "@/tasks/application/create-task.use-case";
import { DeleteTaskUseCase } from "@/tasks/application/delete-task.use-case";
import { GetTaskByIdUseCase } from "@/tasks/application/get-task-by-id.use-case";
import { UpdateTaskUseCase } from "@/tasks/application/update-task.use-case";
import type { ITaskRepository } from "@/tasks/domain/task.repository.interface";
import { ITaskRepositoryToken } from "@/tasks/domain/task.repository.interface";
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Inject, Param, Patch, Post } from "@nestjs/common";
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateTaskDto } from "./dtos/create-task.dto";
import { UpdateTaskDto } from "./dtos/update-task-dto";

@ApiTags("Tasks")
@Controller({path: "tasks", version: '1'})
export class TasksController{

    constructor(
        private readonly createTaskUseCase: CreateTaskUseCase,
        private readonly getTaskByIdUseCase: GetTaskByIdUseCase,
        private readonly updateTaskByIdUseCase: UpdateTaskUseCase,
        private readonly deleteTaskByIdUseCase: DeleteTaskUseCase,
        @Inject(ITaskRepositoryToken) private readonly taskrepository: ITaskRepository
    ){}

    @Get()
    @ApiOperation({ summary: 'Listar todas las tareas'})
    async findAll(){
        return this.taskrepository.findAll();
    }

    @Post()
    @ApiOperation({ summary: 'Crear una nueva tarea'})
    @ApiResponse({ status: HttpStatus.CREATED, description:'Creada correctamente'})
    async create (@Body() task: CreateTaskDto){
        return this.createTaskUseCase.execute(task.title, task.description)
    }

    @Get(":id")
    @ApiOperation({ summary: 'Obtener la tarea por ID'})
    @ApiParam({ name: 'id', description: "II de la tarea (UUID)" })
    @ApiResponse({ status: HttpStatus.OK, description: "Tarea encontrada" })
    @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Tarea no encontrada' })
    async findOne(@Param("id")id: string){
        return this.getTaskByIdUseCase.execute(id);
    }

    @Patch(":id")
    @ApiOperation({ summary: 'Actualiza la tarea por ID' })
    @ApiParam({ name: 'id', description: 'ID de la tarea (UIDD)' })
    async update (@Param("id")id:string, @Body() updateTask: UpdateTaskDto) {
        return this.updateTaskByIdUseCase.execute(id, updateTask);

    }
    
    @Delete(":id")
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation ({ summary: 'ELiminar la tarea por ID'})
    @ApiParam ({ name: 'id', description: 'ID de la tarea (UIID)' })
    @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'Tarea eliminada'})
    async delete(@Param("id") id: string) {
        return this. deleteTaskByIdUseCase.execute(id);
    }


}