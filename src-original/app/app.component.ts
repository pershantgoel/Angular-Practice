import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practice';
  form: FormGroup = {} as FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router){
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      skills: this.formBuilder.array([]),
      currencies: this.formBuilder.array([]),
    })
  }

  get skills():FormArray{
    return this.form.get('skills') as FormArray;
  }

  get currencies():FormArray{
    return this.form.get('currencies') as FormArray;
  }

  newCurrency(){
    return this.formBuilder.control('')
  }

  newSkills(){
    return this.formBuilder.group({
      skill: '',
      exp: ''
    })
  }

  addSkill(){
    this.skills.push(this.newSkills())
  }

  addCurrency(){
    this.currencies.push(this.newCurrency())
  }

  remove(i:number){
    this.skills.removeAt(i);
  }


  submit(){
    console.log(this.form.value);
  }

  showPosts(){
    this.router.navigate(['posts'])
  }


}
