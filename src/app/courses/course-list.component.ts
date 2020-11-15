import { Component } from '@angular/core'
import { Course } from './app.component'
import { CourseService } from './course.service';

@Component({
    
    templateUrl: './course-list.component.html'
})
export class CourselistComponent {

    filteredCourses: Course[] = []

    _courses: Course[] = [];

    _filterby: string

    constructor( private courseService: CourseService) {}

    ngOnInit(): void {
        this.retrieveAll();
       
        
    }
    retrieveAll(): void {
        this.courseService.retrieveAll().subscribe({
            next: courses => {
                this._courses = courses
                this.filteredCourses = this._courses
            },
            error:err => console.log('error' , err)
        })
        
    }
    deleteById(courseId: number): void { 
        this.courseService.deleteById(courseId).subscribe({
            next: () => { 
                console.log('Deleted with success');
                this.retrieveAll();
            },
            error: err => console.log('Error', err)
        })
    }
  

}