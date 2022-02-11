export interface UserAccount {
  sid: string;
  adSid: string;
  adLogonName: string;
  adDisplayName: string;
  adDepartment: string;
  adTitle: string;
  adCreated: string;
  accountStatus: string;
  employeeNumber: string;
  provider: string;
  userIdentity: string;
  accountType: string;
  emailAddresses: string[];
  phoneNumbers: string[];
}
