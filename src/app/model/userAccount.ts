export interface UserAccount {
  adSid: string;
  adLogonName: string;
  adDisplayName: string;
  adDepartment: string;
  adTitle: string;
  adCreated: string;
  accountStatus: string;
  employeeNumber: string;
  provider: string;
  accountType: string;
  emailAddresses: string[];
  phoneNumbers: string[];
}
