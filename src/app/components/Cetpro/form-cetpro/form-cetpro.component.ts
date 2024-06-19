import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Cetpro } from 'src/app/interfaces/Cetpro';
import { ApiService } from 'src/app/services/api-service.service';


@Component({
  selector: 'app-form-cetpro',
  templateUrl: './form-cetpro.component.html',
  styles: [
  ]
})
export class FormCetproComponent {
  @Input() item: Cetpro | null = null;
  @Input() editMode: boolean = false;
  @Output() closeFormEvent = new EventEmitter<void>();
  @Output() dataSavedEvent = new EventEmitter<void>();

  form: FormGroup
  formSubmitted: boolean = false;

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private toast: ToastrService,
  ) {
    this.form = this.fb.group({
      name: ['',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$'),
        ]
      ],
      modularCode: ['',
        [
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(7),
          Validators.pattern('^[0-9 ]+$'),
        ]
      ],
      dreGre: ['',
        [
          Validators.required,
          Validators.pattern('^[A-Z]{3} [A-Za-zñÑáéíóúÁÉÍÓÚ]+$')
        ]
      ],
      managementType: ['',
        [
          Validators.required,
        ]
      ]
    });
  }

  ngOnInit() {
    if (this.item) {
      this.form.patchValue(this.item);
    }
  }

  onSubmit() {
    const data = this.form.value;
    console.log(data);
    if (this.item) {
      this.apiService.updateData(this.item.id, data)
        .subscribe(
          () => {
            this.form.reset();
            this.onCloseForm();
            this.toast.success('Actualización Exitosa', 'Éxito');
            this.dataSavedEvent.emit();
          }
        );
    } else {
      this.apiService.postData(data)
        .subscribe(
          () => {
            this.form.reset();
            this.onCloseForm();
            this.toast.success('Registro Exitoso', 'Éxito');
            this.dataSavedEvent.emit();
          }
        );
    }
  }

  onCloseForm() {
    this.form.reset();
    this.closeFormEvent.emit();
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.form.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched || this.formSubmitted));
  }

  isFieldValid(fieldName: string): boolean {
    const field = this.form.get(fieldName);
    return !!(field && field.valid && (field.dirty || field.touched || this.formSubmitted));
  }
}
