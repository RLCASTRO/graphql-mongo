/**
 * define resolver
 * create mutation(createStudentInput),
 * create service,
 * create student in the database
 */

import { Query, Resolver } from '@nestjs/graphql';
import { StudentType } from './student.type';
import { StudentService } from './student.service';

@Resolver((of) => StudentType)
export class StudentResolver {
  //inject the service with the constructor
  constructor(private studentService: StudentService) {}

  @Query((returns) => StudentType)
  student() {
    return {
      fname: 'Rodrigo',
      lname: 'Castro',
    };
  }
}
