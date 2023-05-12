import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { Repository } from 'typeorm';
import { Mutation } from '@nestjs/graphql';
import { StudentType } from './student.type';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
  //inject the database repository
  constructor(@InjectRepository(Student) private studentRepository: Repository<Student>) {}

//   @Mutation((returns) => StudentType)
//   createStudent(fname, lname): Promise<Student> {
//     const student = this.studentRepository.create({
//       id: uuid(),
//       fname,
//       lname,
//     });
//     return this.studentRepository.save(student);
//   }
}
