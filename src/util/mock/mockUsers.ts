import { Gender } from "../enum/genrder";
import { IUser } from "../model/IUser";

export const mockUsers: IUser[] = [
  {
    id: 1,
    attributes: {
      firstName: "Davide mockedUser",
      lastName: "Martina",
      email: "davidemartina1@gmail.com",
      age: 26,
      gender: Gender.MALE,
    },
  },
  {
    id: 2,
    attributes: {
      firstName: "Lebron",
      lastName: "James",
      email: "lebron.james@gmail.com",
      age: 38,
      gender: Gender.MALE
    },
  },
  {
    id: 3,
    attributes: {
      firstName: "Jane",
      lastName: "Smith",
      email: "janesmith@example.com",
      age: 15,
      gender: Gender.FEMALE,
    },
  },
  {
    id: 4,
    attributes: {
      firstName: "Emily",
      lastName: "Davis",
      email: "emilydavis@example.com",
      age: 45,
      gender: Gender.FEMALE
    },
  },
  {
    id: 5,
    attributes: {
      firstName: "William",
      lastName: "Brown",
      email: "william.brown@example.com",
      age: 20,
      gender: Gender.MALE,
    },
  },
  {
    id: 6,
    attributes: {
      firstName: "Laura",
      lastName: "Wilson",
      email: "laura.wilson@example.com",
      age: 21,
      gender: Gender.FEMALE
    },
  },
  {
    id: 7,
    attributes: {
      firstName: null,
      lastName: "prova",
      email: "emptyName@example.com",
      age: 20,
      gender: Gender.MALE
    },
  },
  {
    id: 8,
    attributes: {
      firstName: "mockedUser",
      lastName: "emptyEmailAndFirstName",
      email: null,
      age: 20,
      gender: Gender.FEMALE,
    },
  },
];
