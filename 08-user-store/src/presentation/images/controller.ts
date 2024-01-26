import { Request, Response } from 'express';
import { CustomError } from '../../domain';
import { FileUploadService } from '../services/';
import { UploadedFile } from 'express-fileupload';
import path from 'path';
import fs from 'fs';

export class ImagesController {
  //DI
  constructor() {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    console.log(`${error}`);
    return res.status(500).json({ error: 'Internal server error' });
  };

  getImage = (req: Request, res: Response) => {
    const { type = '', img = '' } = req.params;
    const imagePath = path.resolve(
      __dirname,
      `../../../uploads/${type}/${img}`
    );
    if (!fs.existsSync(imagePath)) {
      return res.status(404).send('Image not found');
    }
    return res.sendFile(imagePath);
  };
}
