import { ApiService } from './../../services/api.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {
  contactForm!:FormGroup;

  constructor( private formBuilder:FormBuilder, private ApiService:ApiService) {
    this.contactForm = this.formBuilder.group(
      {
        name:["", Validators.required],
        email:["", Validators.required],
        textarea:[""]
      }
    )
  }
  onSubmit() {
    console.log(this.contactForm.value);
    
  }
}
