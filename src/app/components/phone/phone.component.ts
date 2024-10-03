import { Component } from '@angular/core';


interface Contact {
  name: string;
  phoneNumber: string;

}
@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.css'
})
export class PhoneComponent {
  contactLis: Contact[] = [
    { name: "Gerlie Dao-ayan", phoneNumber: "09518942333" },
    { name: "garl", phoneNumber: "09380798236" }
  ];
  name: string = '';
  phoneNumber: string = '';

  addContact() {
    const newContact: Contact = { name: this.name, phoneNumber: this.phoneNumber };
    this.contactLis.push(newContact);
    this.name = '';
    this.phoneNumber = '';
  }

  deleteContact(index: number) {
    this.contactLis.splice(index, 1);
  }
}
