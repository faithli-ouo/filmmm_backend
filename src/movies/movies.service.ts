import { Injectable } from '@nestjs/common';

export type MovieList = "now_playing" | "popular" | "top_rated" | "upcoming"

const originUrl = "https://api.themoviedb.org/3/movie/"
const language = process.env.TMDB_laguage
const region = process.env.TMDB_region


@Injectable()
export class MoviesService {

  async getMovies(type: MovieList): Promise<unknown> {
    const url = `${originUrl}${type}?language=${language}&region=${region}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: process.env.TMDB_Token,
      }
    };

    const res = await fetch(url, options)
    .then((res) => {return res.json()} )
    .catch((err)=> {console.log(err)})

    return res;
  }

}
