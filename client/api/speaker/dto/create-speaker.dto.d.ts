import { Speaker } from '../entities/speaker.entity';
export declare class SpeakerDto implements Readonly<SpeakerDto> {
    id: number;
    name: string;
    company: string;
    email: string;
    bio: string;
    static from(dto: Partial<SpeakerDto>): SpeakerDto;
    static fromEntity({ id, name, bio, email, company }: Speaker): SpeakerDto;
    static toEntity({ id, name, bio, email, company }: SpeakerDto): Speaker;
}
