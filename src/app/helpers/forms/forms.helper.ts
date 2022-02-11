import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormsHelper {
  stringPattern = /[a-zA-Z]+/g;
  
  constructor(
    private _formBuilder: FormBuilder
  ){ }

  createForm(formType: string) : FormGroup {

    let formObj = {};

    switch(formType){
      case 'contact':
        formObj = {
          name: ['', {
            validators: this.getValidators([
                'required', 
                'pattern', 
                'minLength:3'
              ])
            }
          ],
          email: ['', {
            validators: this.getValidators([
                'required', 
                'email'
              ])
            }
          ],
          subject: ['', {
            validators: this.getValidators([
                'required', 
                'pattern', 
                'minLength:10', 
                'maxLength:50'
              ])
            }
            
          ],
          message: ['', {
            validators: this.getValidators([
                'required', 
                'pattern', 
                'minLength:10', 
                'maxLength:500'
              ])
            }
          ]
        };
      break;
    }

    return this._formBuilder.group(formObj);
  }

  private getValidators(validators: string[]) : Array<any> {
    if(!validators){
      throw new Error('Missing validators!');
    }

    // Remove duplicates
    validators = [...new Set(validators)];

    const validatorsArr = [];

    if(validators.includes('required')){
      validatorsArr.push(Validators.required);
    }

    if(validators.includes('pattern')){
      validatorsArr.push(Validators.pattern(this.stringPattern));
    }

    if(validators.includes('email')){
      validatorsArr.push(Validators.email);
    }

    // Find minLength and maxLength
    const minLength = validators.find(validator => validator.includes('minLength'));
    if(minLength){
      const minLengthValue = parseInt(minLength.split(':')[1]);
      validatorsArr.push(Validators.minLength(minLengthValue));
    }

    const maxLength = validators.find(validator => validator.includes('maxLength'));
    if(maxLength){
      const maxLengthValue = parseInt(maxLength?.split(':')[1]);
      validatorsArr.push(Validators.maxLength(maxLengthValue));
    }

    return validatorsArr; 
  }
}
