import { UpdateMode } from "./UpdateMode";

interface IMovie {
    id: number;
    movieid: string;
    title: string;
    description: string;
    videoPath: string;
    imgPath: string;
    banner: string;
    published: Date;
    created_at: Date;
    genreId: number;
    directorId: number;
    actorId: number;
  }
  interface IMovieData {
    id: number;
    movieid: string;
    title: string;
    description: string;
    videoPath: string;
    imgPath: string;
    banner: string;
    published: Date;
    created_at: Date;
    genre: string;
    director: string;
    actor: string;
    slug: string;
  }

  export interface IMovieState {
    readonly isLoading: boolean;
    readonly movies: IMovie[];
    readonly movie: IMovie;
    readonly errors?: string;
    status: 'PENDING' | 'LOADING' | "ERROR" | "SUCCESS"
  }

  const emptyMovieData: IMovieData = {
    id: 0,
    movieid: "",
    title: "",
    description: "",
    videoPath: "",
    imgPath: "",
    banner: "",
    published: new Date(),
    created_at: new Date(),
    genre:"",
    director:"",
    actor:"",
    slug: ""
  };
  

  const emptyMovie: IMovie = {
    id: 0,
    movieid: "",
    title: "",
    description: "",
    videoPath: "",
    imgPath: "",
    banner: "",
    published: new Date(),
    created_at: new Date(),
    genreId: 0,
    directorId: 0,
    actorId: 0,
  };
  
  export { IMovie, emptyMovie, emptyMovieData, IMovieData }