import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css'],
})
export class EdituserComponent implements OnInit {
  userForm!: FormGroup;
  userId!: number;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    const user = this.userService.getUserById(this.userId);

    this.userForm = new FormGroup({
      name: new FormControl(user?.name, Validators.required),
      position: new FormControl(user?.position, Validators.required),
      city: new FormControl(user?.city, Validators.required),
      department: new FormControl(user?.department, Validators.required),
    });
  }

  editUser() {
    if (this.userForm.valid) {
      const updatedUser: User = { id: this.userId, ...this.userForm.value };
      this.userService.updateUser(updatedUser);
      this.router.navigate(['/']);
      console.log('User has been edited!');
    }
  }
}
