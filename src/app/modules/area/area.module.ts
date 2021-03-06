import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaComponent } from './pages/area.component';
import { AreaRouter } from './area.router';
import { ReactiveFormsModule } from '@angular/forms';

import { AreaListComponent } from './components/area-list/area-list.component';
import { AreaEditComponent } from './components/area-edit/area-edit.component';
import { AreaCreateComponent } from './components/area-create/area-create.component';

@NgModule({
  declarations: [AreaComponent, AreaListComponent, AreaEditComponent, AreaCreateComponent],
  imports: [
    CommonModule,
    AreaRouter,
    ReactiveFormsModule
  ]
})
export class AreaModule { }
