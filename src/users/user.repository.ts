import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

// camada para acessar o banco de dados, inserir, deletar, atualizar, etc

@Injectable() 
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>) {}

   async findAll(): Promise<User[]> {
    // SELECT * FROM users
    return await this.userRepository.find();
  }

  async save(user: User): Promise<User> {
    // INSERT INTO users (name, email, password, cpf) VALUES (?, ?, ?, ?)
    return await this.userRepository.save(user);
  }
}