import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'test',
  database: 'postgres',
  synchronize: false,
  logging: true,
  entities: ['src/entities/*.ts'],
  subscribers: [],
  migrations: ['src/migrations/*.ts'],
});
