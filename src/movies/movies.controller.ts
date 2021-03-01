import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from "../entities/movie.entity";

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) { }
    @Get()
    getAll() {
        return this.moviesService.getMovies();
    }
    @Get("/:id")
    getOne(@Param("id") id: string): Movie {
        return this.moviesService.getOne(id);
    }
    @Post()
    create(@Body() movieData) {
        this.moviesService.create(movieData);
    }
    @Delete("/:id")
    delete(@Param("id") id: string) {
        this.moviesService.delete(id);
    }
    @Patch("/:id")
    update(@Param("id") id: string, @Body() updateData) {
        this.moviesService.update(id, updateData);
    }
}