import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  
} from '@angular/forms';
import { Router } from '@angular/router';

import { HttpServiceService } from '../service/http-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-recuperar-contrasena',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
  ],
  templateUrl: './recuperar-contrasena.component.html',
  styleUrl: './recuperar-contrasena.component.scss'
})
export class RecuperarContrasenaComponent {

  form = new FormGroup(
    {
      oldPassword: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      passwordConfirm: new FormControl('', [Validators.required]),
    },
    { validators: this.passwordsMatchValidator }
  );

  passwordsMatchValidator(
    group: AbstractControl
  ): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const passwordConfirm = group.get('passwordConfirm')?.value;

    return password === passwordConfirm ? null : { passwordsMismatch: true };
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    window.alert(
      `El cambio ha sido realizadocon exito!`
    );
  }

}
