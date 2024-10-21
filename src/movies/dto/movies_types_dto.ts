import { IsIn, IsNotEmpty } from 'class-validator';
import { MovieList } from 'src/movies/movies.service';

export class MovieTypesDTO {
  @IsNotEmpty({ message: 'Type must not be empty' })  // Ensure the field is not empty
  @IsIn(['now_playing', 'popular', 'top_rated', 'upcoming'], { message: 'Type must be one of: now_playing, popular, top_rated, upcoming' })
  type: MovieList;
}
