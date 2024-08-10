import { Page } from "../page/Page";
import { Post } from "../post/Post";
import { Role } from "../role/Role";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  pages?: Array<Page>;
  posts?: Array<Post>;
  role?: Role | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
