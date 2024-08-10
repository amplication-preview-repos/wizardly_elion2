import { PageUpdateManyWithoutUsersInput } from "./PageUpdateManyWithoutUsersInput";
import { PostUpdateManyWithoutUsersInput } from "./PostUpdateManyWithoutUsersInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  pages?: PageUpdateManyWithoutUsersInput;
  password?: string;
  posts?: PostUpdateManyWithoutUsersInput;
  role?: RoleWhereUniqueInput | null;
  roles?: InputJsonValue;
  username?: string;
};
