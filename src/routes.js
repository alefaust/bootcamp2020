import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({"mensagem" : "Hello Rocketseat testando"});
})

export default routes;