import IFindByUserAndPassword from "@modules/user/dtos/IFindByUserAndPassword";
import IUserRepository from "@modules/user/repositories/IUserRepository";
import { getRepository, Repository } from "typeorm";
import User from "../entities/User";

class UserRepository implements IUserRepository{
  private ormRepository: Repository<User>
  
  constructor(){
    this.ormRepository = getRepository(User)
  }

  public async findByNameAndPassword({ user, password }: IFindByUserAndPassword): Promise<User | undefined> {
    
    const userObject = this.ormRepository.findOne({
      where: {
        user, 
        password
      } 
    })

    return userObject
  }
}

export default UserRepository
