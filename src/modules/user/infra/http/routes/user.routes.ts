import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import UserController from '../controllers/userController';

const userRouter = Router();
const userController = new UserController();

userRouter.post(
  '/',
  celebrate({
    [Segments.QUERY]: {
      user: Joi.string().required(),
      password: Joi.string().required(),
    },
  }),
  userController.login
);

export default userRouter;
