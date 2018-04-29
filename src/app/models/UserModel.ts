import { ObjectID } from 'mongodb';

export class User {
  _id: ObjectID;
  name: string;
  firstName: string;
  lastName: string;
  password: string;
  likes: any;
}
