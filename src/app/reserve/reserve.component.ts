import { Component, OnInit, Renderer2, ElementRef, ViewChild  } from '@angular/core';
import { Reserve } from '../models/mail';
import { MailService } from '../services/mail.service';

const nameErrorMessage = 'El nombre es obligatorio y solo puede tener caracteres alfabéticos';
const emailErrorMessage = 'El correo debe estar en un formato correcto '+
  '(ejemplos: ejemplo@gmail.com, ejemplo.2@correo.es,...)';
const phoneErrorMessage = 'Debe introducir un número de teléfono correcto y sin espacios entre los números '+
  '(ejemplos: 987654321, 654321987,...)';
const reserveDateErrorMessage = 'Debe introducir una fecha correcta. '+
  'La reserva debe de hacerse con un mínimo de un día de antelación';
const reserveHourErrorMessage = 'Debe introducir una hora correcta. '+
  'Si desea otra hora, puede especificarlo en \"Observaciones\"';
const numberDinersErrorMessage = 'Debe introducir un número correcto de comensales '+
  '(ejemplos: 2, 3, 4, 12,...). Para un número mayor de '+
  '20 personas debe ponerse en contacto directo con el restaurante:';
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

  validatedFormData: boolean = true;
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
    window.scrollTo(0, 0);
    this.checkDate();
    this.dateForm = `${this.year}-${this.month}-${this.day + 1}`;
    this.checkLastInputsValues();
  }

  private checkDate() {
    if (this.month<10) {
      this.month = `0${this.month}`;
    }
    if (this.day<10) {
      this.day = `0${this.day}`;
    }
  }

  private checkLastInputsValues() {
    if (localStorage.name) {
      this.renderer.setProperty(this.nameInput.nativeElement, "value", localStorage.name);
    }
    if (localStorage.email) {
      this.renderer.setProperty(this.emailInput.nativeElement, "value", localStorage.email);
    }
    if (localStorage.phone) {
      this.renderer.setProperty(this.phoneInput.nativeElement, "value", localStorage.phone);
    }
    if (localStorage.reserveDate) {
      this.renderer.setProperty(this.reserveDateInput.nativeElement, "value", localStorage.reserveDate);
    }
    if (localStorage.numberDiners) {
      this.renderer.setProperty(this.numberDinersInput.nativeElement, "value", localStorage.numberDiners);
    }
    if (localStorage.observations) {
      this.renderer.setProperty(this.observationsInput.nativeElement, "value", localStorage.observations);
    }
  }

  keepInputsValues(input, value) {
    switch (input) {
      case 'name':
        localStorage.name = value;
        break;
      case 'email':
        localStorage.email = value;
        break;
      case 'phone':
        localStorage.phone = value;
        break;
      case 'reserveDate':
        localStorage.reserveDate = value;
        break;
      case 'numberDiners':
        localStorage.numberDiners = value;
        break;
      case 'observations':
        localStorage.observations = value;
        break;
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

  private validateData() {
    this.validateName();
    this.validateEmail();
    this.validatePhone();
    this.validateReserveDate();
    this.validateReserveHour();
    this.validateNumberDiners();
    this.validatePreferedPlace();

    if (!this.validatedFormData) {
      this.renderer.setStyle(this.modalError.nativeElement, 'display', 'block');
      return;
    }

    this.sendMail();
  }

  private validateName() {
    let pattern = /^[A-Ñ-Za-ñ-záéíóúÁÉÍÓÚ]+\s?([A-Ñ-Za-ñ-záéíóúÁÉÍÓÚ]+\s?)*$/;

    if (!pattern.test(this.mail.name)) {
      this.nameError = nameErrorMessage;
      this.validatedFormData = false;
    }
  }

  private validateEmail() {
    let pattern = /^.+@.+\.[a-z]+$/;

    if (!pattern.test(this.mail.email)) {
      this.emailError = emailErrorMessage;
      this.validatedFormData = false;
    }
  }

  private validatePhone() {
    let pattern = /^\d{9}$/;

    if (!pattern.test(this.mail.phone)) {
      this.phoneError = phoneErrorMessage;
      this.validatedFormData = false;
    }
  }

  private validateReserveDate() {
    if (this.mail.reserveDate != '') {
      let currentDate = new Date();
      let reserveDateToValidated = new Date(this.mail.reserveDate);

      if (reserveDateToValidated <= currentDate) {
        this.reserveDateError = reserveDateErrorMessage;
        this.validatedFormData = false;
      }
    }
    else {
      this.reserveDateError = reserveDateErrorMessage;
      this.validatedFormData = false;
    }
  }

  private validateReserveHour() {
    let pattern = /^\d{2}:\d{2}$/;

    if (!pattern.test(this.mail.reserveHour)) {
      this.reserveHourError = reserveHourErrorMessage;
      this.validatedFormData = false;
    }
  }

  private validateNumberDiners() {
    let pattern = /^[1-9]\d?$/;
    let numberDinersToValidated = parseInt(this.mail.numberDiners);

    if (pattern.test(this.mail.numberDiners)) {
      if (numberDinersToValidated < 1 || numberDinersToValidated > 20) {
        this.numberDinersError = numberDinersErrorMessage;
        this.validatedFormData = false;
      } 
    }
    else {
      this.numberDinersError = numberDinersErrorMessage;
      this.validatedFormData = false;
    }
  }

  private validatePreferedPlace() {
    if (this.mail.preferedPlace!='Terraza' && this.mail.preferedPlace!='Local') {
      this.preferedPlaceError = preferedPlaceErrorMessage;
      this.validatedFormData = false;
    }
  }

  private sendMail() {
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

  closeModal(modal) {
    if (modal=='correct') {
      this.renderer.setStyle(this.modalCorrect.nativeElement, 'display', 'none');
      this.cleanInputs();
    }
    else {
      this.renderer.setStyle(this.modalError.nativeElement, 'display', 'none');

      this.validatedFormData = true;
      this.nameError = '';
      this.emailError = '';
      this.phoneError = '';
      this.reserveDateError = '';
      this.reserveHourError = '';
      this.numberDinersError = '';
      this.preferedPlaceError = '';
    }
  }

  private cleanInputs() {
    this.renderer.setProperty(this.nameInput.nativeElement, 'value', '');
    this.renderer.setProperty(this.emailInput.nativeElement, 'value', '');
    this.renderer.setProperty(this.phoneInput.nativeElement, 'value', '');
    this.renderer.setProperty(this.reserveDateInput.nativeElement, 'value', '');
    this.renderer.setProperty(this.numberDinersInput.nativeElement, 'value', '');
    this.renderer.setProperty(this.observationsInput.nativeElement, 'value', '');
  }
}