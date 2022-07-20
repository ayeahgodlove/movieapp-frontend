interface IDirector {
    id: "",
    name: string;
    bio: string;
    avatar: string;
    birthyear: Date;
    deathyear: Date;
    created_at: Date;
  }
  
  const emptyDirector: IDirector = {
    id: "",
    name: "",
    bio: "",
    avatar: "",
    birthyear: new Date(),
    deathyear: new Date(),
    created_at: new Date(),
  };
  
  export { IDirector, emptyDirector }