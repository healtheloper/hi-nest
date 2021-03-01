<<<<<<< HEAD
import { Injectable, Param, Body, NotFoundException } from '@nestjs/common';
import { Movie } from '../entities/movie.entity'
@Injectable()
export class MoviesService {

    private movies: Movie[] = [];

    getMovies() {
        return this.movies
    }
    getOne(id: string): Movie {
        const movie = this.movies.find(movie => movie.id === +id)
        if (!movie) {
            throw new NotFoundException(`movie not found by id : ${id}`)
        }
        return movie
    }
    delete(id: string) {
        this.getOne(id)
        this.movies = this.movies.filter(movie => movie.id !== +id)
    }
    update(id: string, updateData) {
        const movie = this.getOne(id)
        this.delete(id)
        this.movies.push({
            ...movie, ...updateData
        })
    }
    create(movieData) {
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData,
        })
    }
=======
import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    return this.movies.find((movie) => movie.id === +id);
  }

  deleteOne(id: string) {
    this.getOne(id);
    this.movies.filter((movie) => movie.id !== +id);
  }

  create(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  update(id: string, updateData) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({ ...movie, ...updateData });
  }
>>>>>>> 7dd821b9b606f3ba9837a15d0492043aaa2f4f3b
}
