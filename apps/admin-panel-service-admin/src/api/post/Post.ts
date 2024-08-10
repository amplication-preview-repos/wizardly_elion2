import { User } from "../user/User";

export type Post = {
  content: string | null;
  createdAt: Date;
  id: string;
  published: boolean | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
