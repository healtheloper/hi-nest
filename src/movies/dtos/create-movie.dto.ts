import { IsNumber, IsString } from 'class-validator';
export class CreateMovieDto {
  @IsNumber()
  id: number;
  @IsString()
  title: string;
  @IsNumber()
  year: number;
  @IsString({ each: true })
  genres: string[];
}
