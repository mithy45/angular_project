import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  searchForm: FormGroup;
  serializedForm: string;

  selectValue: string = "artist";
  displayDateConcert: boolean = false;

  
  constructor(private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      filter: this.selectValue,
      search: '',
      dateMin: null,
      dateMax: null
    });
  }

  ngOnInit(): void {
  }

  onChangeSelect(opt: any) {
    this.selectValue = opt.target.value;
    if(opt.target.value === 'concert'){
      this.displayDateConcert = true;
    } else {
      this.displayDateConcert = false;
      this.searchForm.patchValue({
                                  dateMin: null,
                                  dateMax: null
                                });
    }
  }

  onSubmit() {
    // console.log("filter value : " + this.searchForm.get('filter')?.value);
    // console.log("search value : " + this.searchForm.get('search')?.value);
    // console.log("dateMin value : " + this.searchForm.get('dateMin')?.value);
    // console.log("dateMax value : " + this.searchForm.get('dateMax')?.value);
    // console.log("checkoutForm : " + this.searchForm);
    let formObj = this.searchForm.getRawValue();
    this.serializedForm = JSON.stringify(formObj);
  }

}
