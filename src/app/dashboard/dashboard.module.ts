import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core'; 
import { NotesComponent } from './Notes/notes.component';

@NgModule({
  declarations: [DashboardComponent,
    NotesComponent  
                ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule

  ],
  
  providers: [],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
