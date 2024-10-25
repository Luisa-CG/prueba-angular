import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ClientService } from './client.service';
import { of } from 'rxjs';
import { Client } from '../models/client.model';

describe('ClientService', () => {
  let service: ClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClientService],
    });
    service = TestBed.inject(ClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a new client', () => {
    const newClient: Client = {
      id: 1,
      identification: '1',
      name: 'John',
      lastname: 'Doe',
      email: 'john@example.com',
      phone: '123456789',
      address: '123 Main St'
    };

    service.createClient(newClient).subscribe(client => {
      expect(client.id).toBeDefined(); // Asegúrate de que se asignó un ID
      expect(client.identification).toEqual(newClient.identification);
      expect(client.name).toEqual(newClient.name);
    });
  });

  it('should update an existing client', () => {
    const existingClient: Client = {
      id: 1,
      identification: '1',
      name: 'John',
      lastname: 'Doe',
      email: 'john@example.com',
      phone: '123456789',
      address: '123 Main St'
    };

    service.createClient(existingClient).subscribe();

    const updatedClient: Client = {
      ...existingClient,
      name: 'Jane',
    };

    service.updateClient(updatedClient).subscribe(client => {
      expect(client.name).toEqual('Jane');
    });
  });

  it('should retrieve a client by identification', () => {
    const client: Client = {
      id: 1,
      identification: '1',
      name: 'John',
      lastname: 'Doe',
      email: 'john@example.com',
      phone: '123456789',
      address: '123 Main St'
    };

    service.createClient(client).subscribe();

    service.getClientByIdentification('1').subscribe(retrievedClient => {
      expect(retrievedClient).toBeDefined();
      expect(retrievedClient?.id).toEqual(client.id);
      expect(retrievedClient?.identification).toEqual(client.identification);
    });
  });

  it('should delete a client by identification', () => {
    const client: Client = {
      id: 1,
      identification: '1',
      name: 'John',
      lastname: 'Doe',
      email: 'john@example.com',
      phone: '123456789',
      address: '123 Main St'
    };

    service.createClient(client).subscribe();

    service.deleteClient('1').subscribe(deleted => {
      expect(deleted).toBeTrue(); // Asegúrate de que la eliminación fue exitosa
    });

    // Verificar que el cliente ya no existe
    service.getClientByIdentification('1').subscribe(retrievedClient => {
      expect(retrievedClient).toBeUndefined();
    });
  });

  it('should paginate and filter clients', () => {
    for (let i = 1; i <= 25; i++) {
      service.createClient({
        id: i,
        identification: `${i}`,
        name: `Name${i}`,
        lastname: `Lastname${i}`,
        email: `email${i}@example.com`,
        phone: `123456789${i % 10}`,
        address: `Address ${i}`
      }).subscribe();
    }

    service.getClients('', '', 1, 10).subscribe(clients => {
      expect(clients.length).toEqual(10); // Debe haber 10 clientes en la primera página
    });

    service.getClients('', '', 2, 10).subscribe(clients => {
      expect(clients.length).toEqual(10); // Debe haber 10 clientes en la segunda página
    });

    service.getClients('', '', 3, 10).subscribe(clients => {
      expect(clients.length).toEqual(5); // Debe haber 5 clientes en la tercera página
    });
  });
});
