import { Router } from 'express';

import PoinsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = Router();
const poinsController = new PoinsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.post('/points', poinsController.create);
routes.get('/points', poinsController.index);
routes.get('/points/:id', poinsController.show);

export default routes;