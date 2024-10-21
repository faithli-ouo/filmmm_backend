import { Injectable } from '@nestjs/common';
import { QueryResponse } from 'src/types/global/global.type';
import { MovieResultObject } from 'src/types/movies/movies.types';

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
  ): Promise<MovieDetailsObject> {
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
}
