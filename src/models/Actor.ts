interface IActor {
    id: number,
    name: string;
    bio: string;
    avatar: string;
    birthyear: Date;
    deathyear: Date;
    created_at: Date;
  }
  
  const emptyActor: IActor = {
    id: 0,
    name: "",
    bio: "",
    avatar: "",
    birthyear: new Date(),
    deathyear: new Date(),
    created_at: new Date(),
  };
  
  export { IActor, emptyActor }