import { Router } from 'express';
import userRoutes from '@modules/user/infra/http/routes/user.routes';

const routes = Router();

routes.use('/v1/user', userRoutes);
routes.use('/', (request, response) => response.json("a"));

export default routes;
