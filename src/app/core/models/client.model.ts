export class Client {
    id: number;
    identification: string;
    name: string;
    lastname: string;
    email: string;
    phone: string;
    address: string;

    constructor(id: number, identification: string, name: string, lastname: string, email: string, phone: string, address: string){
        this.id = id;
        this.identification = identification;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.phone = phone;
        this.address = address
    }
}