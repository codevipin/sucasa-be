import { Presentation } from 'src/api/presentation/presentation.entity';
export declare class Speaker {
    id: number;
    name: string;
    company: string;
    email: string;
    bio: string;
    presentation: Presentation[];
}
