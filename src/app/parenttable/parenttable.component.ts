import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parenttable',
  templateUrl: './parenttable.component.html',
  styleUrls: ['./parenttable.component.css']
})
export class ParenttableComponent implements OnInit {
  departments: { name: string; users: User[] }[] = [
    { name: 'Frontend', users: [] as User[] },
    { name: 'Backend', users: [] as User[] }
  ];

  selectedUsers: User[] = [];
  showChildTable: boolean = false;
  user!: User;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.departments[0].users = this.userService.getUsersByDepartment('Frontend');
    this.departments[1].users = this.userService.getUsersByDepartment('Backend');
  }

  viewUsers(department: string) {
    this.showChildTable = true;
    this.selectedUsers = [...this.userService.getUsersByDepartment(department)];
    console.log("Displaying all users of the selected department:", this.selectedUsers);
  }

  deleteEvent(id: number) {
    this.userService.deleteUser(id); 
    this.selectedUsers = this.selectedUsers.filter(user => user.id !== id);
  }
  
  editEvent(user: User) {
    this.router.navigate(['/edituser', user.id]);
  }  
}
