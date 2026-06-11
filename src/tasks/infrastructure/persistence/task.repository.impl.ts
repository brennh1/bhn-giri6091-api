import { Task } from "@/tasks/domain/task.entity";
import { ITaskRepository } from "@/tasks/domain/task.repository.interface";
import { Injectable } from "@nestjs/common";

@Injectable()
export class taskRepositoryImpl implements ITaskRepository{
   
    private tasks : Task[] = [];

    async create(task: Task): Promise<Task> {
       this.tasks.push(task);
       return task
    }
    async findAll(): Promise<Task[]> {
        return this.tasks;
    }
    async findById(id: string): Promise<Task | null> {
        return this.tasks.find( t => t,id == id) || null;
    }
    
     update(task: Task): Promise<Task> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    } 


}