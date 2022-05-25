"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configService = void 0;
require("dotenv/config");
const attendee_entity_1 = require("../api/attendee/attendee.entity");
const presentation_entity_1 = require("../api/presentation/presentation.entity");
const speaker_entity_1 = require("../api/speaker/entities/speaker.entity");
class ConfigService {
    constructor(env) {
        this.env = env;
    }
    getValue(key, throwOnMissing = true) {
        const value = this.env[key];
        if (!value && throwOnMissing) {
            throw new Error(`config error - missing env.${key}`);
        }
        return value;
    }
    ensureValues(keys) {
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
    getTypeOrmConfig() {
        return {
            type: 'postgres',
            host: this.getValue('POSTGRES_HOST'),
            port: parseInt(this.getValue('POSTGRES_PORT')),
            username: this.getValue('POSTGRES_USER'),
            password: this.getValue('POSTGRES_PASSWORD'),
            database: this.getValue('POSTGRES_DATABASE'),
            entities: [presentation_entity_1.Presentation, attendee_entity_1.Attendee, speaker_entity_1.Speaker],
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
exports.configService = configService;
//# sourceMappingURL=database.config.js.map