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

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }
  //id 위에 GET을 작성 해야 search가 id 로 인식이 안된다.
  @Get('search')
  search(@Query('year') searchByYear: string) {
    return `Searching by year : ${searchByYear}`;
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return `This will return id : ${id}`;
  }
  @Post()
  create() {
    return 'This will create a post';
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This will delete somthing id : ${id}`;
  }

  @Patch(':id')
  patch(@Param('id') id: string, @Body() updateData) {
    return {
      updatedMovie: id,
      ...updateData,
    };
  }
}
