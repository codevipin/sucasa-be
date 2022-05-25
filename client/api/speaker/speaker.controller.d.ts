import { SpeakerService } from './speaker.service';
import { SpeakerDto } from './dto/create-speaker.dto';
export declare class SpeakerController {
    private readonly speakerService;
    constructor(speakerService: SpeakerService);
    getAll(): Promise<SpeakerDto[]>;
    getById(id: number): Promise<SpeakerDto>;
    post(dto: SpeakerDto): Promise<SpeakerDto>;
}
