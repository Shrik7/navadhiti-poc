import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import drugOne from '../assets/drug1.json';
import drugTwo from '../assets/drug2.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() {
    this.drugOne = drugOne;
    this.drugTwo = drugTwo;
  }

  formOne = new FormGroup({});
  modelOne: any = {};
  modelTwo: any = {};
  options: FormlyFormOptions = {};
  formTwo = new FormGroup({});;
  drugOne;
  drugTwo;
  fieldsOne: FormlyFieldConfig[] = [];
  fieldsTwo: FormlyFieldConfig[] = [];

  ngOnInit() {
    this.drugOne.fields.sort((a,b) => a.order - b.order);
    console.log(this.drugOne);
    this.drugTwo.fields.sort((a,b) => a.order - b.order);
    console.log(this.drugTwo);
    this.drugOne.fields.forEach(element => {
      this.fieldsOne.push(
        {
          key: element.key,
          type: element.type === 'dropdown' ? 'select' : element.type,
          templateOptions: {
            label: element.label,
            placeholder: element.label,
            required: element.isRequired,
            disabled: element.isReadonly,
            addonRight: element.unit ? {
              text: element.unit,
            } : null,
            options: element.type === 'dropdown' ? this.populateOptions(element.items) : null
          },
          expressionProperties: element.key === "weight" || element.key === "height" ? {
            'model.bmi': (model, formState, field) => {
              if(model.height && model.weight && model.height > 0 && model.weight > 0) {
                return this.calculateBMI(model.height, model.weight);
              }
              return null;
            }
          } : null,
          validation: {
              messages: {
                  required: 'This field is required',
              }
          }
        }
      );
    });
    this.drugTwo.fields.forEach(element => {
      this.fieldsTwo.push(
        {
          key: element.key,
          type: element.type === 'dropdown' ? 'select' : element.type,
          templateOptions: {
            label: element.label,
            placeholder: element.label,
            required: element.isRequired,
            disabled: element.isReadonly,
            addonRight: element.unit ? {
              text: element.unit,
            } : null,
            options: element.type === 'dropdown' ? this.populateOptions(element.items) : null
          },
          validation: {
              messages: {
                  required: 'This field is required',
              }
          }
        }
      );
    });
  }

  populateOptions(items: { value: string, text: string }[]) {
    return items.map(item => { 
      return { value: item.value, label: item.text } 
    });
  }

  calculateBMI(height: number, weight: number): number {
    return weight/(Math.pow((height/100), 2));
  }

  onSubmitOne(model) {
    console.log(model);
    alert("Form One Submitted");
    this.formOne.reset();
  }

  onSubmitTwo(model) {
    console.log(model);
    alert("Form Two Submitted");
    this.formTwo.reset();
  }

}
