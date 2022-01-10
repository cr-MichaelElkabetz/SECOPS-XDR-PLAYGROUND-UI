import {UserAccount} from "./userAccount";

export interface BigtableAccountRow {
  key: string;
  tableName: string;
  userAccount: UserAccount;
}
