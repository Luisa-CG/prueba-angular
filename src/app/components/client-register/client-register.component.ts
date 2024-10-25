import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/core/models/client.model';
import { ClientService } from 'src/app/core/services/client.service';


@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.css'],
})
export class ClientRegisterComponent implements OnInit {
  @Input() client?: Client; // Input para permitir la actualización de un cliente
  clientForm: FormGroup;

  constructor(private fb: FormBuilder, private clientService: ClientService) {
    this.clientForm = this.fb.group({
      identification: ['', Validators.required],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.client) {
      this.clientForm.patchValue(this.client); // Rellenar el formulario con datos del cliente existente
    }
  }

  onSubmit(): void {
    if (this.clientForm.valid) {
      const clientData: Client = { ...this.clientForm.value, id: this.client?.id };
      if (this.client) {
        this.clientService.updateClient(clientData).subscribe(() => {
          alert('Cliente actualizado exitosamente.');
        });
      } else {
        this.clientService.createClient(clientData).subscribe(() => {
          alert('Cliente creado exitosamente.');
        });
      }
      this.clientForm.reset(); // Restablecer el formulario después de la acción
    }
  }
}
