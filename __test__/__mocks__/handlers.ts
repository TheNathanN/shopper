import { rest } from 'msw';
import { fakeData } from './fakeData';

export const handlers = [
  rest.get("https://api.chec.io/v1/products?limit=50", (req, res, ctx) => {
    return res(
      ctx.json(fakeData),
      ctx.status(200)
    );
  })
];