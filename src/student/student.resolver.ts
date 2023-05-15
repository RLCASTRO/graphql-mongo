/**
 * define resolver
 * create mutation(createStudentInput),
 * create service,
 * create student in the database
 */

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentType } from './student.type';
import { StudentService } from './student.service';
import { CreateStudentInput } from './create-student.input';

@Resolver((of) => StudentType)
export class StudentResolver {
  //inject the service with the constructor
  constructor(private studentService: StudentService) {}

  @Mutation((returns) => StudentType)
  async createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createStudent(createStudentInput);
  }

  @Query((returns) => [StudentType])
  getAllStudents() {
    return this.studentService.getAllStudents();
  }

}
