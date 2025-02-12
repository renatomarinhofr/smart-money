export type UserType = 'personal' | 'business';

export interface UserModel {
  name: string;
  email: string;
  phone: string;
  type: UserType;
}
