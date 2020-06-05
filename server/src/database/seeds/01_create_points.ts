import Knex from "knex";

export async function seed(knex: Knex) {
  await knex('points').insert([
    {
      image: 'https://lh5.googleusercontent.com/p/AF1QipNlRQcjLZfsfoGkLi7I3_DUQJLgUlUsOHSpjJBV=w408-h544-k-no',
      name: 'Rede Bom Lugar',
      email: 'rede@rede.com.br',
      whatsapp: '551533269480',
      latitude: -23.4415095,
      longitude: -47.4740855,
      city: 'Sorocaba',
      uf: 'SP'
    },
    {
      image: 'https://lh5.googleusercontent.com/p/AF1QipPG35FHwFHx6_JdBegKpMuYJDhsKnskaWWooPDa=w425-h240-k-no',
      name: 'Supermercado Coop',
      email: 'coop@coop.com.br',
      whatsapp: '551532392911',
      latitude: -23.452721,
      longitude: -47.4850797,
      city: 'Sorocaba',
      uf: 'SP'
    },
    {
      image: 'https://lh5.googleusercontent.com/p/AF1QipNFCgIbAByxd8yfB2RrnOBBZ0d5OqpOOKIE43Sc=w408-h306-k-no',
      name: 'Ki Super Mercado',
      email: 'ki@ki.com.br',
      whatsapp: '551532262709',
      latitude: -23.4436774,
      longitude: -47.4726765,
      city: 'Sorocaba',
      uf: 'SP'
    },
    {
      image: 'https://geo2.ggpht.com/cbk?panoid=n96E2OjlDJ8PJLEfB42VbQ&output=thumbnail&cb_client=search.gws-prod.gps&thumb=2&w=408&h=240&yaw=210.978&pitch=0&thumbfov=100',
      name: 'Supermercado Kaney',
      email: 'kaney@kaney.com.br',
      whatsapp: '551533024707',
      latitude: -23.4443987,
      longitude: -47.472472,
      city: 'Sorocaba',
      uf: 'SP'
    }
  ]);
}