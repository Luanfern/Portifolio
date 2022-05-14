import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Certificate } from './certificates';
import { CertificatesService } from './certificates.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {

  certificates: Certificate[] = [];

  constructor(private title: Title, private serviceCertificate: CertificatesService) { }

  ngOnInit(): void {
    this.title.setTitle('Certificates - Portifolio');
    this.certificatesget();
  }

  certificatesget(): void{
    this.serviceCertificate.getCertificates().subscribe((certificates) => {
      console.log(certificates);
      this.certificates = certificates;
    });
  }

}
