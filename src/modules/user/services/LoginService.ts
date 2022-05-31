import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import IUserRepository from '@modules/user/repositories/IUserRepository';
import User from '../infra/typeorm/entities/User';
import auth from '@config/auth';
import { sign } from 'jsonwebtoken';

interface IRequest {
  user: string;
  password: string;
}

@injectable()
class LoginService {
  constructor(

    @inject('UserRepository')
    private userRepository: IUserRepository,

  ) {}

  async execute({
    user,
    password
  }: IRequest): Promise<string> {

    const userObject = await this.userRepository.findByNameAndPassword({ user, password })

    if(!userObject){
      throw new AppError("user not found!")
    }

    const { publicSecret, publicExpiresIn } = auth.jwt;

    const token = sign({}, publicSecret, {
      subject: JSON.stringify({
        id: userObject.id
      }),
      expiresIn: publicExpiresIn,
    });

    return token
  }
}

export default LoginService;
