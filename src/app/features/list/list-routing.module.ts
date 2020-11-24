import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemPageComponent } from './containers/item-page/item-page.component';
import { ListPageComponent } from './containers/list-page/list-page.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListPageComponent
      },
      {
        path: ':id',
        component: ItemPageComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
