import { Presentation } from '../presentation/presentation.entity';
export declare class Attendee {
    id: number;
    name: string;
    company: string;
    email: string;
    registered: Date;
    presentation: Presentation;
}
