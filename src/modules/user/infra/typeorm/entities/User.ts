import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity('system_user')
class User{
  @PrimaryColumn()
  id: string
  @Column()
  user: string
  @Column()
  password: string
}

export default User