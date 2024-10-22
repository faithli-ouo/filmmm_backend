import { IsIn, IsNotEmpty } from 'class-validator';
import { MovieList } from 'src/movies/movies.service';
import { MoviesDeatilsOtherTypes } from 'src/types/movies/movies_details_other_type';

export class MovieTypesDTO {
  @IsNotEmpty({ message: 'Type must not be empty' }) // Ensure the field is not empty
  @IsIn(['now_playing', 'popular', 'top_rated', 'upcoming'], {
    message: 'Type must be one of: now_playing, popular, top_rated, upcoming',
  })
  type: MovieList;
}

export class MoviesOtherDetailsTypeDTO {
  @IsIn([
    'alternative_titles',
    'credits',
    'social_id',
    'images',
    'keywords',
    'inclued_list',
    'recommendations',
    'release_date',
    'reviews',
    'similar',
    'translations',
    'videos',
    'watch_provider',
    'lastest',
  ], {
    message: 'Type must be one of: alternative_titles, credits, social_id, images, keywords, inclued_list, recommendations, release_date, reviews, similar, translations, videos, watch_provider, lastest',
  })
  type: MoviesDeatilsOtherTypes;
}