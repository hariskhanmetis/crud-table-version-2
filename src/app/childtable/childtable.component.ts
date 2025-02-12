import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-childtable',
  templateUrl: './childtable.component.html',
  styleUrls: ['./childtable.component.css']
})
export class ChildtableComponent {
  @Input() users!: User[];
  @Output() editUser = new EventEmitter<User>();
  @Output() deleteUser = new EventEmitter<number>();

  constructor(private router: Router, private userService: UserService) { }

  onDelete(id: number, department: string) {
    this.userService.deleteUser(id);
    this.users = this.userService.getUsersByDepartment(department);
    this.deleteUser.emit(id);
    console.log("Event Emitter Sent!");
  }

  onEdit(user: User) {
    this.userService.updateUser(user);
    this.editUser.emit(user); 
    console.log("Event Emitter Sent!");
    this.router.navigate(['/edituser', user.id]);
  }
}
