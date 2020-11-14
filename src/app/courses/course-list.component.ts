import { Component } from '@angular/core'
import { Course } from './app.component'

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourselistComponent {

    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '',
                price: 99.99,
                code: 'x-1',
                duration: 120,
                rating: 4.5,
                releaseDate: 'December, 02, 2019'
            },
            {
                id: 2,
                name: 'Angular: HTTP',
                imageUrl: '',
                price: 45,
                code: 'x-2',
                duration: 80,
                rating: 4,
                releaseDate: 'November, 02, 2019'
            }
        ]
    }

}