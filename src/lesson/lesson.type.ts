import { Field, ID, ObjectType } from '@nestjs/graphql';
import { StudentType } from 'src/student/student.type';

@ObjectType('Lesson') //argument to define the name of the class instead of LessonTypeTs
export class LessonType {
  @Field(type => ID) //to detine this field as ID field for graphql
  id: string;

  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;

  @Field(type => [StudentType])
  students: string[];
}
