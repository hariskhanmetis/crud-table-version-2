import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-childtable',
  templateUrl: './childtable.component.html',
  styleUrls: ['./childtable.component.css']
})
export class ChildtableComponent {
  @Input() users!: User[];
  @Output() editUser = new EventEmitter<User>();
  @Output() deleteUser = new EventEmitter<number>();

  constructor() { }

  onDelete(id: number) {
    this.deleteUser.emit(id);
    console.log("Event Emitter Sent... User Deleted!");
  }

  onEdit(user: User) {
    this.editUser.emit(user); 
    console.log("Event Emitter Sent... User is being edited!");
  }
}
