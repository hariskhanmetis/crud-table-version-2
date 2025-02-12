import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    { id: 1, name: 'Alice', position: 'Frontend Dev', city: 'New York', department: 'Frontend' },
    { id: 2, name: 'Bob', position: 'Frontend Dev', city: 'San Francisco', department: 'Frontend' },
    { id: 3, name: 'Charlie', position: 'Backend Dev', city: 'Chicago', department: 'Backend' },
    { id: 4, name: 'David', position: 'Backend Dev', city: 'Austin', department: 'Backend' }
  ];
  constructor() { }

  getUsersByDepartment(department: string): User[] {
    const filteredUsers = this.users.filter(user => user.department === department);
    return filteredUsers;
  }

  addUser(user: User) {
    this.users.push(user);
  }

  deleteUser(id: number) {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  updateUser(updatedUser: User) {
    const index = this.users.findIndex(user => user.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = updatedUser;
    }
  }
}
