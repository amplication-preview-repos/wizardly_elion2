import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PageCreateInput = {
  content?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
