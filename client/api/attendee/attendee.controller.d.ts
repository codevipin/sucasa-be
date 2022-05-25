import { Attendee } from './attendee.entity';
import { AttendeeService } from './attendee.service';
export declare class AttendeeController {
    private service;
    constructor(service: AttendeeService);
    getAttendee(id: number): Promise<Attendee>;
    getAllAttendee(): Promise<Attendee[]>;
    createAttendee(attendee: Attendee): Promise<Attendee>;
}
