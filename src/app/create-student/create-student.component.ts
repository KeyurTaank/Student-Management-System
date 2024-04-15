import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { NgClass, NgIf } from '@angular/common';
import { Student } from '../model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-student',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgIf],
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.scss'
})
export class CreateStudentComponent implements OnInit {
  public studentForm! : FormGroup;
  public studentId! : string | undefined;
  @Input()
  set stdId(value : string)
  {
    this.studentId = value;
  }
  constructor(private router : Router, private fb : FormBuilder, private studentService : StudentService) {}

  ngOnInit(): void {
    this.studentForm = this.fb.group ({
      id : [''],
      img : ['', [Validators.required]],
      name : ['', [Validators.required, Validators.minLength(2), Validators.pattern('^([^0-9]*)$')]],
      age : ['', [Validators.required, Validators.min(18), Validators.max(32)]],
      email : ['', [Validators.required, Validators.email]],
      number : ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    })
    this.initStudent()
    console.log('student form', this.studentForm);
  }

  initStudent()
  {
    if(this.studentId)
    {
      this.studentService.getStudentDetails(this.studentId).subscribe((res) => 
      {
        const studentData = res
        console.log('this.studentData', studentData)
        if(studentData)
        {
          this.studentForm.setValue(studentData);
        }
      });
    }
  }

  goTo()
  {
    console.log('go to')
    this.router.navigate(['student-list'])
  }

  saveStudent()
  {
    console.log('student form', this.studentForm);
    let studentApi : Observable<any>;
    if(this.studentForm.valid)
    {
      if(this.studentId)
      {
        studentApi = this.studentService.updateStudent(this.studentId, this.studentForm.value)
      }
      else
      {
        studentApi = this.studentService.saveStudent(this.studentForm.value)
      }
        studentApi.subscribe((res)=>{
        this.goTo();
      });
    }
  }
}