import { NgModule } from "@angular/core";
import { MatCardModule  } from '@angular/material/card';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule  } from '@angular/material/toolbar';
import { MatProgressSpinnerModule  } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  exports: [
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ]
})
export class AngularMaterialModule {}
