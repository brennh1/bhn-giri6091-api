import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/infrastructure/task.module';

@Module({
  imports: [
    TasksModule
  ],
})
export class AppModule {}
