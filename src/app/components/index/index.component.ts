import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  meals$: Observable<any> | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.meals$ = this.dataService.getMeals();
  }
}
