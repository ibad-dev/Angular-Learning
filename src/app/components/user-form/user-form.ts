import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule,MatSelectModule,MatButtonModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm {
  private fb = inject(FormBuilder);

  userForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(8), Validators.required]],
    gender: ['', [Validators.required]],
    phone: ['', Validators.required],
  });

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    } else {
      console.log('Invaild Form');
    }
  }

  hide = signal(true)

  togglePasswordVisibility(event:MouseEvent){
    event.preventDefault()
    event.stopPropagation()
    this.hide.set(!this.hide())
  }

}
