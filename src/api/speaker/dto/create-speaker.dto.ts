// item.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';
import { Speaker } from '../entities/speaker.entity';

export class SpeakerDto implements Readonly<SpeakerDto> {
  @ApiProperty({ required: true })
  @IsUUID()
  id: number;

  @ApiProperty({ required: true })
  @IsString()
  name: string;

  @ApiProperty({ required: true })
  @IsString()
  company: string;

  @ApiProperty({ required: true })
  @IsString()
  email: string;

  @ApiProperty({ required: true })
  @IsString()
  bio: string;

  public static from(dto: Partial<SpeakerDto>) {
    const it = new SpeakerDto();
    it.id = dto.id;
    it.name = dto.name;
    it.company = dto.company;
    it.email = dto.email;
    it.bio = dto.bio;
    return it;
  }

  public static fromEntity({ id, name, bio, email, company }: Speaker) {
    return this.from({
      id,
      name,
      bio,
      email,
      company,
    });
  }

  public static toEntity({ id, name, bio, email, company }: SpeakerDto) {
    const it = new Speaker();
    it.id = id;
    it.name = name;
    it.bio = bio;
    it.company = company;
    it.email = email;
    return it;
  }
}
