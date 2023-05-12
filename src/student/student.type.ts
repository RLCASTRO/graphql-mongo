import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class StudentType {
  @Field()
  id: string;

  @Field()
  fname: string;

  @Field()
  lname: string;
}
