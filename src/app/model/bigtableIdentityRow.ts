import {UserIdentity} from "./userIdentity";

export interface BigtableIdentityRow {
  key: string;
  tableName: string;
  userIdentity: UserIdentity;
}
