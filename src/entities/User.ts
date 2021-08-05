import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import PokemonUser from "./Pokemon_Users"
import Sessions from "./Sessions";

@Entity("users")
export default class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @OneToMany(() => PokemonUser, (pokemon_user) => pokemon_user.userId)
  pokemon_user!: PokemonUser[];

  @OneToMany(() => Sessions, (sessions) => sessions.userId)
  sessions!: Sessions[];
}
