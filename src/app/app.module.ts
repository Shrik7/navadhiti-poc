import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NumberFieldType } from './custom/number-input';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { DateFieldType } from './custom/date-input';

@NgModule({
  declarations: [
    AppComponent, DateFieldType, NumberFieldType
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormsModule,
    FormlyModule.forRoot({
      types: [
        { name: 'date', component: DateFieldType },
        { name: 'number', component: NumberFieldType }
      ],})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
