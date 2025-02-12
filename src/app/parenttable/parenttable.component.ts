import { Component, Input, OnInit } from '@angular/core';
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
  selectedDepartment: string = '';
  showChildTable: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.departments[0].users = this.userService.getUsersByDepartment('Frontend');
    this.departments[1].users = this.userService.getUsersByDepartment('Backend');
  }

  viewUsers(department: string) {
    this.showChildTable = true;
    this.selectedUsers = [...this.userService.getUsersByDepartment(department)];
    this.selectedDepartment = department;
    console.log("Selected Users:", this.selectedUsers);
  }

  navigateToAddUser() {
    this.router.navigate(['/adduser']);
  }

  deleteEvent() {
    console.log("Event Emitter Recieved!")
  }

  editEvent() {
    console.log("Event Emitter Recieved!")
  }
}
