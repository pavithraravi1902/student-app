import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher, TeacherService } from '../service/teacher.service';

@Component({
  selector: 'app-teacher-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  routeParameter;
  teacher: Teacher = {} as Teacher;
  constructor(private route: ActivatedRoute, private router: Router, private teacherService: TeacherService) {
    this.routeParameter =  Number(this.route.snapshot.paramMap.get("id"));
   }

  ngOnInit(): void {
    this.teacherService.getTeacherById(this.routeParameter).subscribe((response) => {
      this.teacher = response;
    });
  }
  onDelete(): void {
    alert("Are you sure to delete this data?");
    this.teacherService.removeTeacherById(this.routeParameter).subscribe(() => {
      alert("Deleted successfully!");
      this.router.navigate(["teachers"]);
    });
  }
}
