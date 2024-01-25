import mongoose from 'mongoose';

export class validators {
  static isMongoID(id: string) {
    return mongoose.isValidObjectId(id);
  }
}
