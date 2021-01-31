import {  NgModule } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import { SidebarModule} from 'primeng/sidebar';
import {TableModule} from 'primeng/table';

const PRIMENG_MODULES = [
  InputTextModule,
  SidebarModule,
  TableModule
];

@NgModule({
  imports: PRIMENG_MODULES,
  exports: PRIMENG_MODULES
})
export class PrimengModule{ }
