import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [MoviesModule],
})
export class AppModule {}
