import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ContactInfo } from 'src/models/custom-types';

@Component({
  selector: 'ct-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

contact:ContactInfo = new ContactInfo();

name = new FormControl('');

onSubmit(){
  // logica om deze via een service naar de back-end te sturen
}

}

