import { Controller, Get,  HttpException,  HttpStatus,  Param,  Query, } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MovieTypesDTO } from 'src/movies/dto/movies_types_dto';
import { MovieResultObject } from 'src/types/movies/moveis.types';
import { QueryResponse } from 'src/types/global/global.type';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  async findAll(@Query() movieTypesDTO: MovieTypesDTO ): Promise<QueryResponse<MovieResultObject>> {
    const type = movieTypesDTO.type
    try {
      const res = await this.moviesService.getMovies(type)
      return res;
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'This is a custom message',
      }, HttpStatus.FORBIDDEN, {
        cause: error
      });
    }
    }


  @Get("/:id")
  async findone(@Param('id') id:number): Promise<unknown> {
    return id
  }

}