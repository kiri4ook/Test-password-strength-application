import { Component } from '@angular/core';

@Component({
  selector: 'app-password-checker',
  templateUrl: './password-checker.component.html',
  styleUrls: ['./password-checker.component.scss']
})

export class PasswordCheckerComponent {
  password: string = '';
  isEmpty: boolean = false;
  isUnavialable: boolean = false;
  isWeak: boolean = false;
  isMedium: boolean = false;
  isStrong: boolean = false;


  checkPassword() {
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasNumbers = /[0-9]/.test(this.password);
    const hasSymbols = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(this.password);

    this.isEmpty = this.password.length == 0;
    this.isUnavialable = this.password.length < 8;
    this.isWeak = (hasLetters || hasNumbers || hasSymbols) && this.password.length >= 8;
    this.isMedium = (
      (hasLetters && hasNumbers) ||
      (hasLetters && hasSymbols) ||
      (hasNumbers && hasSymbols)
    ) && this.password.length >= 8;
    this.isStrong = hasLetters && hasNumbers && hasSymbols && this.password.length >= 8;
  }
}