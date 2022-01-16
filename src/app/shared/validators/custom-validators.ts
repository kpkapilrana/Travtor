import { FormControl, FormGroup } from "@angular/forms";
import * as moment from 'moment';

export class CustomValidators{
static validateDropOffTime(controlName1: string, controlName2: string,controlName3: string,controlName4: string,)
  {
    return (formGroup: FormGroup) => {
      const pick_date = formGroup.controls[controlName1].value;
      const drop_date = formGroup.controls[controlName2].value;
      const control3 = formGroup.controls[controlName3];
      const control4 = formGroup.controls[controlName4];
    
      if(new Date(pick_date).getTime() == new Date(drop_date).getTime()){
        const pick_time = '11/24/2014 '+ control3.value;
        const drop_time ='11/24/2014 '+control4.value;
        console.log("Time",pick_time,drop_time);
        
        const date1 =  new Date(pick_time).getTime();
        const date2 = new Date(drop_time).getTime();
        if(date1 < date2){
            control4.setErrors(null);
        }else if (date1 > date2){
            control4.setErrors({invalidSlot:true});
        }else{
            control4.setErrors({invalidSlot:true});
        }
      }
  }
  }
  static dateValidator(control:FormControl):{[key:string]:any}|null 
  {
      const dateVal = control.value;
      
      return moment(dateVal, "DD/MM/YYYY",true).isValid()? 
          null: {   
                    invalidDate: true
                }
  }

  static ageValidator(control:FormControl):{[key:string]:any}|null{
    if (control.value !== undefined && (isNaN(control.value) || control.value < 18 )) {
      return { 'ageError': true };
  }
  return null;
  }
}