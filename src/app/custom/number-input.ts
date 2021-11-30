import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
 selector: 'formly-number',
 template: `
   <h3 style="width: 80vw"> {{ field.templateOptions.label }} </h3>
   <input [formControl]="formControl" type="number" [formlyAttributes]="field" />
 `,
})
export class NumberFieldType extends FieldType {}