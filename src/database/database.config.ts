import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv/config';
import { Attendee } from 'src/api/attendee/attendee.entity';
import { Presentation } from 'src/api/presentation/presentation.entity';
import { Speaker } from 'src/api/speaker/entities/speaker.entity';

class ConfigService {
  constructor(private env: { [k: string]: string | undefined }) {}

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }

  ensureValues(keys: string[]) {
    keys.forEach((k) => this.getValue(k, true));
    return this;
  }

  getPort() {
    return this.getValue('PORT', true);
  }

  isProduction() {
    const mode = this.getValue('MODE', false);
    return mode != 'DEV';
  }

  getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',

      host: this.getValue('POSTGRES_HOST'),
      port: parseInt(this.getValue('POSTGRES_PORT')),
      username: this.getValue('POSTGRES_USER'),
      password: this.getValue('POSTGRES_PASSWORD'),
      database: this.getValue('POSTGRES_DATABASE'),

      entities: [Presentation, Attendee, Speaker],
      synchronize: true,
      ssl: this.isProduction(),
    };
  }
}

const configService = new ConfigService(process.env).ensureValues([
  'POSTGRES_HOST',
  'POSTGRES_PORT',
  'POSTGRES_USER',
  'POSTGRES_PASSWORD',
  'POSTGRES_DATABASE',
]);

export { configService };
