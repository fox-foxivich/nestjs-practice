import { IsNumber } from 'class-validator';

export class CreateDto {
  @IsNumber()
  readonly num: number;
}
