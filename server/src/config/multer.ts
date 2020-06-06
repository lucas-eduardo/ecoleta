import multer from 'multer';
import { resolve } from 'path';
import { randomBytes } from 'crypto';

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp'),
    filename(req, file, cb) {
      const hash = randomBytes(6).toString('hex');

      const fileName = `${hash}-${file.originalname}`;

      cb(null, fileName);
    },
  }),
};
