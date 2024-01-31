import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { CoreService } from './services/core.service';
import { PlatformLocation } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup = {} as FormGroup;
  hideRouter: boolean = false;
  favIcon: HTMLLinkElement | null = document.querySelector('#appIcon');
  
  constructor(private fb: FormBuilder,
    private titleSerive: Title,
    private core: CoreService,
    private platFormLocation: PlatformLocation,
    private router: Router) {
      this.platFormLocation.onPopState(res => {
        console.log('pop state res ->', res);
        this.hideRouter = false;
      });
    }
  
  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      skills: this.fb.array([]),
      currencies: this.fb.array([])
    });
    this.form.valueChanges.subscribe(data => {
      console.log('data -> ', data);
    });
    this.form.statusChanges.subscribe(data => {
      console.log('status changes -> ', data);
    });
    this.titleSerive.setTitle("Reactive Form");
  }
  
  newSkill(): FormGroup {
    return this.fb.group({
      skill: ['', [Validators.required]],
      exp: ''
    })
  }
  newCurrency(): FormControl {
    return this.fb.control('')
  }
  
  get skills(): FormArray {
    return this.form.get('skills') as FormArray;
  }
  
  get currencies(): FormArray {
    return this.form.get('currencies') as FormArray;
  }

  get name(): FormControl {
    return this.form.get('name') as FormControl;
  }
  
  addSkill() {
    this.skills.push(this.newSkill());
  }
  addCurrency() {
    this.currencies.push(this.newCurrency());
  }
  
  removeSkill(i: number) {
    this.skills.removeAt(i);
  }
  
  onSubmit() {
    console.log('name control -> ', this.name);
    console.log('skill control -> ', this.skills);
    console.log(this.form.valid);
  }

  changeIcon() {
    this.favIcon ? this.favIcon.href = 'https://www.google.com/favicon.ico' : null;
  }

  getPlayers() {
    this.core.getPlayers().subscribe(res => {
      console.log('players -> ', res);
    });
  };

  goTo(page: string) {
    this.hideRouter = !this.hideRouter;
    this.router.navigate([page]);
  }
}
