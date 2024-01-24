import { error } from 'console';
import mongoose from 'mongoose';

interface Options {
  mongoUrl: string;
  dbName: string;
}

export class MongoDatabase {
  static async connect(options: Options) {
    const { mongoUrl, dbName } = options;

    try {
      await mongoose.connect(mongoUrl, {
        dbName,
      });
      console.log('Connected');
      return true;
    } catch {
      console.log('Mongo connection error');
      throw error;
    }
  }
}
