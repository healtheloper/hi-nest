import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll', () => {
    it('should be return Movies', () => {
      const movies = service.getAll();
      expect(movies).toBeInstanceOf(Array);
    });
  });
  describe('getOne', () => {
    it('should be return Movie', () => {
      service.create({
        title: 'Test Movie',
        genres: ['test'],
        rating: 0.5,
      });
      const movie = service.getOne(1);
      const movieTitle = 'Test Movie';
      expect(movie.title).toEqual(movieTitle);
    });
  });
  describe('delete', () => {
    it('delete movie', () => {
      service.create({
        title: 'Test Movie',
        genres: ['test'],
        rating: 0.5,
      });
      const beforeLength = service.getAll().length;
      service.deleteOne(1);
      const afterLength = service.getAll().length;
      expect(afterLength).toBeLessThan(beforeLength);
    });
  });
  describe('create', () => {
    it('create movie', () => {
      const beforeLength = service.getAll().length;
      service.create({
        title: 'Test Movie',
        genres: ['test'],
        rating: 0.5,
      });
      const afterLength = service.getAll().length;
      expect(afterLength).toBeGreaterThan(beforeLength);
    });
  });
  describe('update', () => {
    it('update movie', () => {
      service.create({
        title: 'Test Movie',
        genres: ['test'],
        rating: 0.5,
      });
      service.update(1, { title: 'Update Movie' });
      const movie = service.getOne(1);
      expect(movie.title).toEqual('Update Movie');
    });
  });
});
