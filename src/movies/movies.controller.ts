import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }
  //id 위에 GET을 작성 해야 search가 id 로 인식이 안된다.
  @Get('search')
  search(@Query('year') searchByYear: string) {
    return `Searching by year : ${searchByYear}`;
  }

  @Get(':id')
  getOne(@Param('id') id: string): Movie {
    return this.moviesService.getOne(id);
  }
  @Post()
  create(@Body() movieData) {
    return this.moviesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moviesService.deleteOne(id);
  }

  @Patch(':id')
  patch(@Param('id') id: string, @Body() updateData) {
    return {
      updatedMovie: id,
      ...updateData,
    };
  }
}
