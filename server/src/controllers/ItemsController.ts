import { Request, Response } from 'express';

import knex from '../database/connection';

class ItemsController {
  async index(req: Request, res: Response): Promise<Response<any>> {
    const items = await knex('items').select('*');

    const serializedItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `${process.env.URI_API}/uploads/${item.image}`,
      };
    });

    return res.json(serializedItems);
  }
}

export default ItemsController;
