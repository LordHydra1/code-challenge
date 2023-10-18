export interface IUser {
  UserName: string;
  FirstName: string;
  LastName: string;
  MiddleName: string | null;
  Gender: string;
  Age: number | null;
  Emails: string[];
  FavoriteFeature: string;
  Features: string[];
  AddressInfo: {
    Address: string;
    City: {
      Name: string;
      CountryRegion: string;
      Region: string;
    };
  }[];
  HomeAddress: string | null;
}