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
  selector: 'app-registro-usuario',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
  ],
  templateUrl: './registro-usuario.component.html',
  styleUrl: './registro-usuario.component.scss',
})
export class RegistroUsuarioComponent {
  constructor(private router: Router) {}

  form = new FormGroup(
    {
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      apellido: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      correo: new FormControl('', [Validators.required]),
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
      `Hola ${this.form.value.nombre}, te has registrado correctamente!`
    );
  }
}
