import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  checkoutForm: FormGroup;

  selectValue: string = "artist";
  displayDateConcert: boolean = false;
  
  constructor(private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
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
      this.checkoutForm.patchValue({
                                  dateMin: null,
                                  dateMax: null
                                });
    }
  }

  onSubmit() {
    console.log("filter value : " + this.checkoutForm.get('filter')?.value);
    console.log("search value : " + this.checkoutForm.get('search')?.value);
    console.log("dateMin value : " + this.checkoutForm.get('dateMin')?.value);
    console.log("dateMax value : " + this.checkoutForm.get('dateMax')?.value);
  }

}
