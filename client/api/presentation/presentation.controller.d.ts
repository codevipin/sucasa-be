import { AttendeeService } from '../attendee/attendee.service';
import { SpeakerService } from '../speaker/speaker.service';
import { Presentation } from './presentation.entity';
import { PresentationService } from './presentation.service';
export declare class PresentationController {
    private service;
    private attendeeService;
    private speakerService;
    constructor(service: PresentationService, attendeeService: AttendeeService, speakerService: SpeakerService);
    getPresentation(id: number): Promise<Presentation>;
    getAllPresentations(): Promise<Presentation[]>;
    createPresentation(presentation: Presentation): Promise<Presentation>;
    addAttendees(presentationId: number, attendeeId: number): Promise<Presentation>;
}
