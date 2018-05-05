import { ObjectID } from 'mongodb';

export class User {
  id: ObjectID;
  name: string;
  password: string;
  crDate: Date;
}
