interface IUser {
  id: string;
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  email: string;
  birthyear: Date;
  created_at: Date;
}

const emptyUser: IUser = {
  id: '',
  firstname: '',
  lastname: '',
  username: '',
  password: '',
  email: '',
  birthyear: new Date(),
  created_at: new Date(),
};

export { IUser, emptyUser }