import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  user: User = { id: 0, name: '', position: '', city: '', department: '' };

  constructor (private userService: UserService, private router: Router) {}

  addUser() {
    this.userService.addUser(this.user);
    this.router.navigate(['/']);
  }
}