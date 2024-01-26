import { Router } from 'express';
import { FileUploadService } from '../services';
import { FileUploadController } from './controller';

export class FileUploadRoutes {
  static get routes(): Router {
    const router = Router();
    const fileUploadService = new FileUploadService();
    const controller = new FileUploadController(fileUploadService);

    // Definir las rutas
    router.post('/single/:type', controller.uploadFile);
    router.post('/multiple/:type', controller.uploadMultipleFiles);

    // router.use('/api/todos', /*TodoRoutes.routes */ );

    return router;
  }
}
