import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateStudentInput {
  @Field()
  fname: string;

  @Field()
  lname: string;
}
