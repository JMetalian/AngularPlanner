import {  NgModule } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import { SidebarModule} from 'primeng/sidebar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button'

const PRIMENG_MODULES = [
  InputTextModule,
  SidebarModule,
  TableModule,
  DropdownModule,
  ButtonModule
];

@NgModule({
  imports: PRIMENG_MODULES,
  exports: PRIMENG_MODULES
})
export class PrimengModule{ }
