import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Division } from 'src/app/model/division.model';
import { DivisionService } from '../../services/division.service';

@Component({
  selector: 'app-edit-division',
  templateUrl: './edit-division.component.html',
  styleUrls: ['./edit-division.component.css']
})
export class EditDivisionComponent implements OnInit {
  formDivision: any;
  division?: Division;

  submitted = false;

  constructor(private divisionService: DivisionService, private router: Router) { }

  ngOnInit(): void {
    this.formDivision = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
    });

    this.retrieveId();
  }

  retrieveId():void{
    const id = this.router.parseUrl(this.router.url).root.children['primary']
      .segments[1].path;
    // console.log(id);
      this.divisionService.getAll().subscribe(
        (data) => {
          // Assuming the API is not ready for retriving ID
          for(let i = 0; i < data.length; i++) {
            if(data[i]._id == id){
              this.division = data[i];
              console.log(this.division);
            }
          }
        },
        (error) => {
          console.error(error);
        }
      );
  }

  onSubmit(){
    const id = this.router.parseUrl(this.router.url).root.children['primary'].segments[1].path;

    this.divisionService.update(id, this.formDivision.value).subscribe(
      (data) => {
        this.formDivision.reset();
        this.router.navigate(['/divisi']);
      },
      (error) => {
        console.error(error);
      }
    );

    this.submitted = true;
  }

}
