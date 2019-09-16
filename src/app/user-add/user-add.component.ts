import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BusinessService } from '../business.service';
import Business from '../Business';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  angForm: FormGroup;
  userDataList: Business;
 
  constructor(private fb: FormBuilder, private bs: BusinessService) {
    this.createForm();
    
  }

  createForm() {
    this.angForm = this.fb.group({
      person_name: ['', Validators.required ],
      business_name: ['', Validators.required ],
      business_phone_number: ['', Validators.required ],
      business_email: ['', Validators.required ]
    });
  }

  addBusiness(person_name, busines_name, business_phone_number, business_email) {
    this.bs.addBusiness(person_name, busines_name, business_phone_number, business_email);
  }

  showUserData(){
    this.userDataList = this.bs.showUserData();
    
  }

  ngOnInit() {
  }

}
