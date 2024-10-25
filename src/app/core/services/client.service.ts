import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private clients: Client[] = []; // Almacena clientes generados

  constructor(private http: HttpClient) {
    this.generateClients(); // Generar clientes al iniciar el servicio
  }

  private generateClients(): void {
    for (let i = 0; i < 100; i++) {
      this.clients.push({
        id: i + 1, // Genera un ID incremental
        identification: `${i + 1}`,
        name: `Name${i + 1}`,
        lastname: `Lastname${i + 1}`,
        email: `email${i + 1}@example.com`,
        phone: `123456789${i % 10}`, // Simular diferentes números de teléfono
        address: `Address ${i + 1}`
      });
    }
  }

  getClients(name?: string, lastname?: string, page: number = 1, limit: number = 10): Observable<Client[]> {
    // Filtrar clientes según nombre y apellido
    let filteredClients = this.clients.filter(client =>
      (!name || client.name.includes(name)) &&
      (!lastname || client.lastname.includes(lastname))
    );

    // Paginación
    const start = (page - 1) * limit;
    const end = start + limit;
    return of(filteredClients.slice(start, end));
  }

  getClientByIdentification(identification: string): Observable<Client | undefined> {
    const client = this.clients.find(c => c.identification === identification);
    return of(client);
  }

  createClient(client: Client): Observable<Client> {
    // Asignar un ID único
    client.id = this.clients.length ? Math.max(...this.clients.map(c => c.id!)) + 1 : 1;
    this.clients.push(client);
    return of(client);
  }

  updateClient(client: Client): Observable<Client> {
    const index = this.clients.findIndex(c => c.identification === client.identification);
    if (index !== -1) {
      this.clients[index] = client;
      return of(client);
    }
    return of();
  }

  deleteClient(identification: string): Observable<boolean> {
    const index = this.clients.findIndex(c => c.identification === identification);
    if (index !== -1) {
      this.clients.splice(index, 1);
      return of(true);
    }
    return of(false);
  }
}
