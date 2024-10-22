import { Injectable } from '@nestjs/common';
import { QueryResponse } from 'src/types/global/global.type';
import { MovieResultObject } from 'src/types/movies/movies.types';
import { MovieDetailsObject } from 'src/types/movies/movies_details_type';
import {
  MoviesAlternativeTitles,
  MoviesCredits,
  MoviesImages,
  MoviesIncludedList,
  MoviesKeywords,
  MoviesLastest,
  MoviesRecomendations,
  MoviesReleaseDates,
  MoviesReviews,
  MoviesSimilar,
  MoviesSocialId,
  MoviesTranslations,
  MoviesVideos,
  MoviesWatchProviders,
} from 'src/types/movies/movies_details_other_type';

export type MovieList = 'now_playing' | 'popular' | 'top_rated' | 'upcoming';

const originUrl = 'https://api.themoviedb.org/3/movie/';
const language = process.env.TMDB_language;
const region = process.env.TMDB_region;

@Injectable()
export class MoviesService {
  //Get Movielist by defined types: "now_playing" | "popular" | "top_rated" | "upcoming"
  async getMovies(type: MovieList): Promise<QueryResponse<MovieResultObject>> {
    const url = `${originUrl}${type}?language=${language}&region=${region}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: process.env.TMDB_Token,
      },
    };

    const res = await fetch(url, options)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });

    return res;
  }

  //Get Movie Details by defined id
  async getMoviesDetailsByID(id: number): Promise<MovieDetailsObject> {
    const url = `${originUrl}${id}?language=${language}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: process.env.TMDB_Token,
      },
    };

    const res = await fetch(url, options)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });

    return res;
  }

  //Get Movie Alternative Titles by deifned id
  async getMoviesAlternativeTitlesByID(
    id: number,
  ): Promise<MoviesAlternativeTitles> {
    const url = `${originUrl}${id}/alternative_titles?language=${language}&region=${region}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: process.env.TMDB_Token,
      },
    };

    const res = await fetch(url, options)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });

    return res;
  }

  //Get Movie Credits by deifned id
  async getMoviesCreditsByID(id: number): Promise<MoviesCredits> {
    const url = `${originUrl}${id}/credits?language=${language}&region=${region}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: process.env.TMDB_Token,
      },
    };

    const res = await fetch(url, options)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });

    return res;
  }

  //Get Movie Social ID by deifned id
  async getMoviesSocialIDByID(id: number): Promise<MoviesSocialId> {
    const url = `${originUrl}${id}/external_ids?language=${language}&region=${region}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: process.env.TMDB_Token,
      },
    };

    const res = await fetch(url, options)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });

    return res;
  }

  //Get Movie Images by deifned id
  async getMoviesImagesByID(id: number): Promise<MoviesImages> {
    const url = `${originUrl}${id}/images`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: process.env.TMDB_Token,
      },
    };

    const res = await fetch(url, options)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });

    return res;
  }

  //Get Movie Keywords by deifned id
  async getMoviesKeywordsByID(id: number): Promise<MoviesKeywords> {
    const url = `${originUrl}${id}/keywords`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: process.env.TMDB_Token,
      },
    };

    const res = await fetch(url, options)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });

    return res;
  }

  //Get Movie Inclueded List by deifned id
  async getMoviesIncludedListsByID(
    id: number,
    page = 1,
  ): Promise<MoviesIncludedList> {
    const url = `${originUrl}${id}/lists?page=${page}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: process.env.TMDB_Token,
      },
    };

    const res = await fetch(url, options)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });

    return res;
  }

  //Get Movie Recommendations by deifned id
  async getMoviesRecommendationsByID(
    id: number,
    page = 1,
  ): Promise<MoviesRecomendations> {
    const url = `${originUrl}${id}/recommendations?language=${language}&region=${region}&page=${page}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: process.env.TMDB_Token,
      },
    };

    const res = await fetch(url, options)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });

    return res;
  }

  //Get Movie Release Dates by deifned id
  async getMoviesReleaseDatesByID(
    id: number,
    page = 1,
  ): Promise<MoviesReleaseDates> {
    const url = `${originUrl}${id}/release_dates?language=${language}&region=${region}&page=${page}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: process.env.TMDB_Token,
      },
    };

    const res = await fetch(url, options)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });

    return res;
  }

  //Get Movie Reviews by deifned id
  async getMoviesReviewsByID(id: number, page = 1): Promise<MoviesReviews> {
    const url = `${originUrl}${id}/reviews?language=${language}&region=${region}&page=${page}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: process.env.TMDB_Token,
      },
    };

    const res = await fetch(url, options)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });

    return res;
  }

  //Get Similar Movie by deifned id
  async getMoviesSimilarByID(id: number, page = 1): Promise<MoviesSimilar> {
    const url = `${originUrl}${id}/similar?language=${language}&region=${region}&page=${page}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: process.env.TMDB_Token,
      },
    };

    const res = await fetch(url, options)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });

    return res;
  }

  //Get Movie Translation Description by deifned id
  async getMoviesTranslationByID(id: number): Promise<MoviesTranslations> {
    const url = `${originUrl}${id}/translations?language=${language}&region=${region}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: process.env.TMDB_Token,
      },
    };

    const res = await fetch(url, options)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });

    return res;
  }

  //Get Movie Videos by deifned id
  async getMoviesVideosByID(id: number): Promise<MoviesVideos> {
    const url = `${originUrl}${id}/videos?language=${language}&region=${region}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: process.env.TMDB_Token,
      },
    };

    const res = await fetch(url, options)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });

    return res;
  }

  //Get Movie Watch Providers by deifned id
  async getMoviesWatchProviderByID(id: number): Promise<MoviesWatchProviders> {
    const url = `${originUrl}${id}/providers?language=${language}&region=${region}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: process.env.TMDB_Token,
      },
    };

    const res = await fetch(url, options)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });

    return res;
  }

  //Get Movie Lastest by deifned id
  async getMoviesLastestByID(id: number): Promise<MoviesLastest> {
    const url = `${originUrl}${id}/latest?language=${language}&region=${region}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: process.env.TMDB_Token,
      },
    };

    const res = await fetch(url, options)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });

    return res;
  }
}
