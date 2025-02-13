import { Component, Input, Output, EventEmitter, SimpleChanges, OnDestroy } from '@angular/core';
import { User } from '../models/user.model';
import { OnChanges } from '@angular/core';

@Component({
  selector: 'app-childtable',
  templateUrl: './childtable.component.html',
  styleUrls: ['./childtable.component.css']
})
export class ChildtableComponent implements OnChanges, OnDestroy {
  @Input() users!: User[];
  @Output() editUser = new EventEmitter<User>();
  @Output() deleteUser = new EventEmitter<number>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['users']) {
      console.log("Users list changed:", changes['users'].currentValue);
    }
  }

  ngOnInit(): void {
    console.log("ChildtableComponent Initialized!");
  }

  onDelete(id: number) {
    this.deleteUser.emit(id);
    console.log("Event Emitter Sent... User Deleted!");
  }

  onEdit(user: User) {
    this.editUser.emit(user); 
    console.log("Event Emitter Sent... User is being edited!");
  }

  ngOnDestroy(): void {
    console.log("ChildtableComponent Destroyed! Cleaning up...");
  }

}
