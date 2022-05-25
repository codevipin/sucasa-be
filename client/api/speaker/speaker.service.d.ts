import { Repository } from 'typeorm';
import { SpeakerDto } from './dto/create-speaker.dto';
import { Speaker } from './entities/speaker.entity';
export declare class SpeakerService {
    private repo;
    constructor(repo: Repository<Speaker>);
    getAll(): Promise<SpeakerDto[]>;
    findOne(id: number): Promise<SpeakerDto>;
    create(dto: SpeakerDto): Promise<SpeakerDto>;
}
