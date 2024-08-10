import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SettingsWhereInput = {
  id?: StringFilter;
  key?: StringNullableFilter;
  value?: StringNullableFilter;
};
