import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MovieTypesDTO } from 'src/movies/dto/movies_types_dto';
import { MovieResultObject} from 'src/types/movies/movies.types';
import { QueryResponse } from 'src/types/global/global.type';
import { MovieDetailsObject } from 'src/types/movies/movies_details_type';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  async findAll(
    @Query() movieTypesDTO: MovieTypesDTO,
  ): Promise<QueryResponse<MovieResultObject>> {
    const type = movieTypesDTO.type;
    try {
      const res = await this.moviesService.getMovies(type);
      return res;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Data not found',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Get('/:id')
  async findone(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<MovieDetailsObject> {
    try {
      const res = await this.moviesService.getMoviesDetailsByID(id);
      return res;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Data not found',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }
}
