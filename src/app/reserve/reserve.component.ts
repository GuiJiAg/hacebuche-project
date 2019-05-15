import { Component, OnInit, Renderer2, ElementRef, ViewChild  } from '@angular/core';
import { Reserve } from '../models/mail';
import { MailService } from '../services/mail.service';

const nameErrorMessage = 'El nombre solo puede tener caracteres alfabéticos';
const emailErrorMessage = 'El correo debe estar en un formato correcto (ejemplo@gmail.com)';
const phoneErrorMessage = 'Debe introducir un número de teléfono correcto';
const reserveDateErrorMessage = 'Debe introducir una fecha correcta';
const reserveHourErrorMessage = 'Debe introducir una hora correcta. Si desea otra hora, puede especificarlo en \"Observaciones\"';
const numberDinersErrorMessage = 'Debe introducir un número correcto de comensales (2, 3, 4, 12,...)';
const preferedPlaceErrorMessage = 'Debe eligir una zona preferente';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {
  @ViewChild('name') nameInput: ElementRef;
  @ViewChild('email') emailInput: ElementRef;
  @ViewChild('phone') phoneInput: ElementRef;
  @ViewChild('reserveDate') reserveDateInput: ElementRef;
  @ViewChild('numberDiners') numberDinersInput: ElementRef;
  @ViewChild('observations') observationsInput: ElementRef;
  @ViewChild('modalError') modalError: ElementRef;
  @ViewChild('modalCorrect') modalCorrect: ElementRef;

  mail: Reserve = new Reserve;

  dateForm: any = new Date();

  year: any = this.dateForm.getFullYear();
  month: any = this.dateForm.getMonth() + 1;
  day: any = this.dateForm.getDate();

  nameError: String = '';
  emailError: String = '';
  phoneError: String = '';
  reserveDateError: String = '';
  reserveHourError: String = '';
  numberDinersError: String = '';
  preferedPlaceError: String = '';

  constructor(
    private renderer: Renderer2,
    private mailService: MailService
  ) { }

  ngOnInit() {
    this.checkDate();
    this.dateForm = `${this.year}-${this.month}-${this.day}`;
  }

  checkDate() {
    if (this.month<10) {
      this.month = `0${this.month}`;
    }
    if (this.day<10) {
      this.day = `0${this.day}`;
    }
  }

  getFormData(
    name, 
    email, 
    phone, 
    reserveDate, 
    reserveHour, 
    numberDiners, 
    terrazaChecked, terrazaValue, localValue,
    observations) 
  {
    this.mail.name = name;
    this.mail.email = email;
    this.mail.phone = phone;
    this.mail.reserveDate = reserveDate;
    this.mail.reserveHour = reserveHour;
    this.mail.numberDiners = numberDiners;
    if (terrazaChecked) { this.mail.preferedPlace = terrazaValue; } else { this.mail.preferedPlace = localValue; }
    this.mail.observations = observations;

    this.validateData();
  }

  validateData() {
    let validated = true;
    let pattern = /^[A-Ñ-Za-ñ-záéíóúÁÉÍÓÚ]+$/;

    if (!pattern.test(this.mail.name)) {
      validated = false;
      this.nameError = nameErrorMessage;
    }

    pattern = /^\w+@\w+\.[a-z]+$/;

    if (!pattern.test(this.mail.email)) {
      validated = false;
      this.emailError = emailErrorMessage;
    }

    pattern = /^\d{9}$/;

    if (!pattern.test(this.mail.phone)) {
      validated = false;
      this.phoneError = phoneErrorMessage;
    }

    pattern = /^\d{4}-\d{2}-\d{2}$/;

    if (!pattern.test(this.mail.reserveDate)) {
      validated = false;
      this.reserveDateError = reserveDateErrorMessage;
    }

    pattern = /^\d{2}:\d{2}$/;

    if (!pattern.test(this.mail.reserveHour)) {
      validated = false;
      this.reserveHourError = reserveHourErrorMessage;
    }

    pattern = /^[1-9]\d?$/;

    if (!pattern.test(this.mail.numberDiners)) {
      validated = false;
      this.numberDinersError = numberDinersErrorMessage;
    }

    if (this.mail.preferedPlace!='Terraza' && this.mail.preferedPlace!='Local') {
      validated = false;
      this.preferedPlaceError = preferedPlaceErrorMessage;
    }

    if (!validated) {
      this.renderer.setStyle(this.modalError.nativeElement, 'display', 'block');
      return;
    }

    this.sendMail();
  }

  sendMail() {
    this.dateForm = new Date(this.mail.reserveDate);

    this.year = this.dateForm.getFullYear();
    this.month = this.dateForm.getMonth() + 1;
    this.day = this.dateForm.getDate();

    this.checkDate();
    this.dateForm = `${this.day}/${this.month}/${this.year}`;
    this.mail.reserveDate = this.dateForm;
    this.mailService.sendMail(this.mail).subscribe();
    this.renderer.setStyle(this.modalCorrect.nativeElement, 'display', 'block');
  }

  closeModalError() {
    this.renderer.setStyle(this.modalError.nativeElement, 'display', 'none');

    this.nameError = '';
    this.emailError = '';
    this.phoneError = '';
    this.reserveDateError = '';
    this.reserveHourError = '';
    this.numberDinersError = '';
    this.preferedPlaceError = '';
  }

  closeModalCorrect() {
    this.renderer.setStyle(this.modalCorrect.nativeElement, 'display', 'none');

    this.cleanInputs();
  }

  cleanName() {
    this.renderer.setProperty(this.nameInput.nativeElement, 'value', '');
  }

  cleanEmail() {
    this.renderer.setProperty(this.emailInput.nativeElement, 'value', '');
  }

  cleanPhone() {
    this.renderer.setProperty(this.phoneInput.nativeElement, 'value', '');
  }

  cleanReserveDate() {
    this.renderer.setProperty(this.reserveDateInput.nativeElement, 'value', '');
  }

  cleanNumberDiners() {
    this.renderer.setProperty(this.numberDinersInput.nativeElement, 'value', '');
  }

  cleanObservations() {
    this.renderer.setProperty(this.observationsInput.nativeElement, 'value', '');
  }

  cleanInputs() {
    this.cleanName();
    this.cleanEmail();
    this.cleanPhone();
    this.cleanReserveDate();
    this.cleanNumberDiners();
    this.cleanObservations();
  }
}