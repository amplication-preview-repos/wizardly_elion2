import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PageUpdateInput = {
  content?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
