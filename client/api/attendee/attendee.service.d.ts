import { Repository } from 'typeorm';
import { Attendee } from './attendee.entity';
export declare class AttendeeService {
    private attendeesRepository;
    constructor(attendeesRepository: Repository<Attendee>);
    findAll(): Promise<Attendee[]>;
    findOne(id: number): Promise<Attendee>;
    add(attendee: Attendee): Promise<Attendee>;
}
