import { envs } from '../../config';
import {
  UserModel,
  MongoDatabase,
  CategoryModel,
  ProductModel,
} from '../../data';

async () => {
  await MongoDatabase.connect({
    dbName: envs.MONGO_DB_NAME,
    mongoUrl: envs.MONGO_URL,
  });
  await main();
};

async function main() {
  //0. Borrar todo
  await Promise.all([
    UserModel.deleteMany(),
    CategoryModel.deleteMany(),
    ProductModel.deleteMany(),
  ]);
  //1. Crear usuarios
  //2. Crear categorias
  //3. Crear productso
  console.log('SEEDED');
}
