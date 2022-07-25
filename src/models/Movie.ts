interface IMovie {
    id: string;
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
    id: string;
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
  }

  const emptyMovieData: IMovieData = {
    id: "",
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
  };
  

  const emptyMovie: IMovie = {
    id: "",
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