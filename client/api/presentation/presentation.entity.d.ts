import { Attendee } from '../attendee/attendee.entity';
import { Speaker } from '../speaker/entities/speaker.entity';
export declare class Presentation {
    id: number;
    presentation: string;
    details: string;
    room: number;
    attendees: Attendee[];
    speaker: Speaker;
}
