export interface User {
  id: number;
  email: string;
  name: string;
  surname1: string;
  surname2: string;
}

export interface Users {
  users: User[];
}
