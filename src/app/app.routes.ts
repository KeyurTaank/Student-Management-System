import { Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { ViewStudentComponent } from './view-student/view-student.component';

export const routes: Routes = [{
    title : 'Student List',
    path : 'student-list',
    component : StudentListComponent
},{
    title : 'Create student',
    path : 'create-student',
    component : CreateStudentComponent
},{
    title : 'View student',
    path : 'view-student/:stdId',
    component : ViewStudentComponent
},{
    title : 'Edit student',
    path : 'edit-student/:stdId',
    component : CreateStudentComponent
},{
    path : '**',
    redirectTo : 'student-list'
}];