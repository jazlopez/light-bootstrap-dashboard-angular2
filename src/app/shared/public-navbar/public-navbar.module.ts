import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PublicNavbarComponent } from './public-navbar.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ PublicNavbarComponent ],
    exports: [ PublicNavbarComponent ]
})

export class PublicNavbarModule { }
