import { Repository } from 'typeorm';
import { Presentation } from './presentation.entity';
export declare class PresentationService {
    private presentationsRepository;
    constructor(presentationsRepository: Repository<Presentation>);
    findAll(): Promise<Presentation[]>;
    findOne(id: number): Promise<Presentation>;
    remove(id: number): Promise<void>;
    add(presentation: Presentation): Promise<Presentation>;
    patch(presentation: Presentation): Promise<Presentation>;
}
