import {UserAccount} from "./userAccount";

export interface UserAccountRequest {
  tenantID: string;
  accountIdentifier: string;
  userAccount: UserAccount;
}
