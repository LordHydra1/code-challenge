import { IUser } from "../../models/IUser";

function filterOutOddUsers(users: IUser[]): IUser[] {
  const evenUsers: IUser[] = [];
  const numberOfUsers = users.length;
  for (let i = 0; i < numberOfUsers; i++) {
    if (i % 2 === 0) {
      evenUsers.push(users[i]);
    }
  }

  return evenUsers;
}

function generalFunctionFilterUsersByGender(
  users: IUser[],
  genderValue: string
): IUser[] {
  let filteredUser: IUser[] = [];
  if (users.length > 0) {
    filteredUser = users.filter((user) => user.Gender === genderValue);
  }
  return filteredUser;
}

export { filterOutOddUsers, generalFunctionFilterUsersByGender };
