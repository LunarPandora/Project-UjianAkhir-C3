import { Component, OnInit } from '@angular/core';
import { Division } from '../model/division.model';
import { DivisionService } from '../services/division.service';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {

  divisions?:Division[];
  currentDivision:Division={};
  name='';

  constructor(private divisionService:DivisionService) { }

  ngOnInit(): void {
    this.retrieveDivision();
  }

  retrieveDivision():void{
    this.divisionService.getAll()
      .subscribe(
        data => {
          this.divisions=data;
        },
        error=>{
          console.log(error);
        }
      );
  }

  deleteDivision(division: Division): void {
    if (division._id !== undefined && confirm('Apakah anda yakin ingin menghapus data ini?')) {
      this.divisionService.delete(division._id).subscribe(
        (data) => {
          this.retrieveDivision();
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}
