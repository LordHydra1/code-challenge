import { Gender } from "../enum/genrder";

export interface IUser {
    attributes: ISingleUser;
    id:number;
}

export interface ISingleUser {
    firstName:string | null;
    lastName:string
    gender: Gender;
    age:number;
    email:string | null;
}


