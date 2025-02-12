import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParenttableComponent } from './parenttable/parenttable.component';
import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';

const routes: Routes = [
  { path: '', component: ParenttableComponent },
  { path: 'edituser/:id', component: EdituserComponent },
  { path: 'adduser', component: AdduserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
