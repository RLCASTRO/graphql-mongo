import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Lesson') //argument to define the name of the class instead of LessonTypeTs
export class LessonTypeTs {
  @Field(type => ID) //to detine this field as ID field for graphql
  id: string;

  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;
}
