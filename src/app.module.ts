import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/infrastructure/task.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    TasksModule
  ],
})
export class AppModule {}
