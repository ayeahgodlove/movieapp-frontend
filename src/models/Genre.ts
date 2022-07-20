interface IGenre {
    id: string;
    title: string;
    description: string;
    created_at: Date;
  }
  
  const emptyGenre: IGenre = {
    id: "",
    title: "",
    description: "",
    created_at: new Date()
  };
  
  export { IGenre, emptyGenre }