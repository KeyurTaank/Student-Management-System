import { Injectable } from '@angular/core';
import { Student } from '../model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const STUDENT : Student[] = [
  {
    img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    id: 's1',
    name: 'Suraj',
    age: 32,
    email: 'test@test.com',
    number: '12457654',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    id: 's2',
    name: 'Rahul',
    age: 12,
    email: 'test@test.com',
    number: '12457654',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    id: 's3',
    name: 'Pritesh',
    age: 23,
    email: 'test@test.com',
    number: '12457654',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    id: 's4',
    name: 'Ajinkya',
    age: 38,
    email: 'test@test.com',
    number: '12457654',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    id: 's5',
    name: 'Nikhil',
    age: 18,
    email: 'test@test.com',
    number: '12457654',
  },
];

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://localhost:5000/api/'
  public students : Student[] = STUDENT;
  constructor(private http : HttpClient) { }

  getStudentList() : Observable<any>
  { 
    return this.http.get(`${this.baseUrl}/students`)
  }

  getStudentDetails(id : string) : Observable<any>
  {
    return this.http.get(`${this.baseUrl}/students/${id}`); 
  }

  saveStudent(std : Student) : Observable<any>
  {
    return this.http.post(`${this.baseUrl}/students`, std)
  }

  updateStudent(id : string, std : Student) : Observable<any>
  {
    return this.http.patch(`${this.baseUrl}/students/${id}`, std)
  }

  deleteStudent(id : string) : Observable<any>
  {
    return this.http.delete(`${this.baseUrl}/students/${id}`); 
  }
}