import IFindByUserAndPassword from '../dtos/IFindByUserAndPassword'
import User from '../infra/typeorm/entities/User'

export default interface IUserRepository {
  findByNameAndPassword({ user, password } : IFindByUserAndPassword) : Promise<User | undefined>
}
