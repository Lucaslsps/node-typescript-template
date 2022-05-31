import { Request, Response } from 'express';
import { container } from 'tsyringe';
import LoginService from '@modules/user/services/LoginService';

export default class UserController {
  public async login(request: Request, response: Response): Promise<Response> {
    const { user, password } = request.query

    const loginService = container.resolve(LoginService)

    const systemUser = await loginService.execute({
      user: String(user),
      password: String(password)
    })

    return response.json(systemUser)
  }
}