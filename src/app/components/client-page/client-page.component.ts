import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/core/models/client.model';
import { ClientService } from 'src/app/core/services/client.service';


@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.css'],
})
export class ClientPageComponent implements OnInit {

  clients: Client[] = [];
  searchName: string = '';
  searchLastname: string = '';
  currentPage: number = 1; // Controlar la página actual
  itemsPerPage: number = 10; // Elementos por página
  totalClients: number = 0; // Total de clientes para la paginación

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.loadClients(); // Cargar clientes al iniciar
  }

  loadClients(event?: any): void {
    if (event) {
      // Ajustar la página actual basado en el evento de lazy load
      this.currentPage = (event.first / this.itemsPerPage) + 1; // Calcular la página actual
    }

    // Llamar al servicio para obtener los clientes
    this.clientService.getClients(this.searchName, this.searchLastname, this.currentPage, this.itemsPerPage).subscribe(client => {
      this.clients = client; // Asumir que 'data' es el arreglo de clientes
      this.totalClients = client.length; // Asumir que 'total' es el número total de clientes
    });
  }

  onSearch(): void {
    this.currentPage = 1; // Reiniciar a la primera página al buscar
    this.loadClients(); // Cargar clientes con nuevos parámetros de búsqueda
  }

  deleteClient(id: string): void {
    this.clientService.deleteClient(id).subscribe(() => {
      alert('Cliente eliminado exitosamente.');
      this.loadClients(); // Recargar la lista después de eliminar
    });
  }
}
