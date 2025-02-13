import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  userForm: FormGroup;

  constructor(private userService: UserService, private router: Router) {
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      position: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      department: new FormControl('', Validators.required)
    });
  }

  addUser() {
    if(this.userForm.valid) {
      this.userService.addUser(this.userForm.value);
      this.router.navigate(['/']);
      console.log("New user has been added!");
    }
  }
}