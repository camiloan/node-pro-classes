import { Router } from 'express';
import { ImagesController } from './controller';

export class ImagesRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new ImagesController();

    // Definir las rutas
    router.get('/:type/:img', controller.getImage);

    // router.use('/api/todos', /*TodoRoutes.routes */ );

    return router;
  }
}
