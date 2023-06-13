export interface Skill {
  name: string;
  exp: number;
}
export interface Address {
  street: string;
  ward: string;
  district: string;
  province: string;
}

export interface Staff {
  firstName: string;
  lastName: string;
  gender: string;
  familyMember: string;
  address: Address;
  vehicles: string[];
  hobbies: string[];
  skills: Skill[];
  subEmployees: Staff[];
}
