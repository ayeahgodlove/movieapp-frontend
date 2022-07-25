interface IGenre {
    id: number;
    title: string;
    description: string;
    created_at: Date;
  }
  
  const emptyGenre: IGenre = {
    id: 0,
    title: "",
    description: "",
    created_at: new Date()
  };
  
  export { IGenre, emptyGenre }