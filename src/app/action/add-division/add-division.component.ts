import { Component, OnInit } from '@angular/core';
import { Division } from '../../model/division.model';
import { DivisionService } from '../../services/division.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-division',
  templateUrl: './add-division.component.html',
  styleUrls: ['./add-division.component.css']
})
export class AddDivisionComponent implements OnInit {

  division: Division = {
    name: '',
    description: '',
  };
  submitted = false;

  constructor(private divisionService: DivisionService, private router: Router) { }

  ngOnInit(): void {
  }

  saveDivision():void{
    const data = {
      name: this.division.name,
      description: this.division.description
    };
  
    this.divisionService.create(data)
      .subscribe(
        response => {
          console.log(response);

          alert('Data anda berhasil ditambahkan!');
          this.router.navigate(['/divisi']);
        },
        error => {
          console.log(error);
        });
  }

}
