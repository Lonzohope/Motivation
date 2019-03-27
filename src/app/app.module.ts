import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MotivationFormComponent } from './motivation-form/motivation-form.component';
import { QuotesComponent } from './quotes/quotes.component';
import { MotivationComponent } from './motivation/motivation.component';
import { MotivationDetailsComponent } from './motivation-details/motivation-details.component';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MotivationFormComponent,
    QuotesComponent,
    MotivationComponent,
    MotivationDetailsComponent,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
