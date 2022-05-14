import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { appService } from 'src/app/app.service';
import { ContactmeService } from './contactme.service';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.scss']
})
export class ContactmeComponent implements OnInit {

  snackbar = false;
  snackbartext = 'Email enviado com sucesso!';

  contactme = this.fb.group({
    name: ['', Validators.required],
    email: ['',[Validators.required, Validators.email]],
    subject: ['Contato'],
    message: ['',[Validators.required, Validators.minLength(4)]]
    });

  constructor(private title: Title,
    private fb: FormBuilder,
    public servicecontact: ContactmeService,
    private appservice: appService) { }

  ngOnInit(): void {
    this.title.setTitle('Contact me - Portifolio');
  }

  get fields(): any {
    return this.contactme.controls;
  }

  onSubmit(): void{
    this.appservice.loadingbar = true;
    this.contactme.markAllAsTouched();
    if(this.contactme.invalid){
      this.appservice.loadingbar = false;
      return;
    }
    this.enviaremail(this.contactme.value);
  }

  enviaremail(form: any): void{
    this.servicecontact.sendEmail(form).subscribe(
      (response) => {
        this.contactme.reset();
        this.appservice.loadingbar = false;
        this.snackbar = true;
        setTimeout(() => {
          this.snackbar = false;
        } , 3000);
        console.log(response);
        if(response.messageId){
          this.snackbartext = 'E-mail enviado com sucesso!';
        }else{
          console.log('error');
          this.snackbartext = 'Erro ao enviar o e-mail!';
        }
      }
    );
  }

}
