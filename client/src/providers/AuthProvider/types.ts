import { User } from "common/entities";
import { Nullable } from "common/types";

export interface AuthContextInterface {
  user: Nullable<User>;
  signIn: (login: string, callback: () => void) => void;
  signOut: () => void;
  isLoading: boolean;
}
