import { ObjectID } from 'mongodb';

export class Conversation {
  id: ObjectID;
  name: string;
  userId: ObjectID;
  crDate: Date;
}
