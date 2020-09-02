import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SupportPage } from './support.page';
import { PdfViewerModule } from 'ng2-pdf-viewer';

const routes: Routes = [
  {
    path: '',
    component: SupportPage
  }
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    IonicModule,
    PdfViewerModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SupportPage]
})
export class SupportPageModule {}
