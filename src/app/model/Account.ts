import {Role} from "./Role";

export interface Account {
  id?: number;
  username?: string;
  avatarURL?: string;
  role?: Role[];
  email?: string;
  locked?: boolean;
  firstName?: string;
  lastName?: string;
  createdAt?: any;
}
