import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
 selector: 'formly-date',
 template: `
   <h3 style="width: 80vw"> {{ field.templateOptions.label }} </h3>
   <input [formControl]="formControl" type="date" [formlyAttributes]="field" />
 `
})
export class DateFieldType extends FieldType {}