import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dtos/create-movie.dto';
import { UpdateMovieDto } from './dtos/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }
  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
  }
  //id 위에 GET을 작성 해야 search가 id 로 인식이 안된다.
  @Get('search')
  search(@Query('year') searchByYear: string) {
    return `Searching by year : ${searchByYear}`;
  }
  @Get(':id')
  getOne(@Param('id') id: number): Movie {
    const movie = this.moviesService.getOne(id);
    if (!movie) {
      throw new NotFoundException(`Movie is not found by id: ${id}`);
    }
    return movie;
  }
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.moviesService.deleteOne(id);
  }
  @Patch(':id')
  patch(@Param('id') id: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.update(id, updateData);
  }
}
