import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from '../user';
import {HttpService} from '../http.service';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
  providers: [HttpService]
})
export class SignupFormComponent implements OnInit {
  loginForm = this.fb.group({
    name: ['', [Validators.required]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(7)]],
  });
  arrowActiveSrc = 'assets/Fill.svg';
  arrowDefaultSrc = 'assets/black-arr.svg';
  arrowActiveAlt = 'Arrow';
  logoSrc = 'assets/logo.svg';
  logoAlt = 'Logo';
  logoName = 'assets/logo-name.svg';
  logoNameAlt = 'Porte Richi';
  availableUsers: any[] = [];
  private selectOptionsWrapper;
  private activeArrow;
  private defaultArrow;
  receivedUser: User = {};
  done = false;
  user: User = {};

  constructor(private fb: FormBuilder, private router: Router, private httpService: HttpService) {
  }

  async ngOnInit() {
    this.selectOptionsWrapper = document.querySelector('.registration__form-input-select__options');
    this.availableUsers = await this.getRemoteData();
    this.activeArrow = document.querySelector('.registration__form-input-select__active-arrow');
    this.defaultArrow = document.querySelector('.registration__form-input-select__default-arrow');
  }

  getRemoteData() {
    const users = [{
      username: 'dzer',
      name: 'пр-т Дзержинского, 122',
    }, {
      username: 'olesh',
      name: 'ул. Олешего 10',
    }, {
      username: 'trum',
      name: 'ул. Кальварийская, 7Б',
    }];
    return new Promise<any[]>((resolve, reject) => {
      setTimeout(() => {
        resolve(users);
      }, 400);
    });
  }

  onUserClick(user) {
    this.loginForm.patchValue(user);
  }

  onSelectFocus() {
    this.selectOptionsWrapper.classList.add('expanded');
    this.activeArrow.classList.add('expanded');
    this.defaultArrow.classList.add('expanded');
  }

  onSelectBlur() {
    this.selectOptionsWrapper.classList.remove('expanded');
    this.activeArrow.classList.remove('expanded');
    this.defaultArrow.classList.remove('expanded');

  }

  onFormSubmit() {
    this.user.username = this.loginForm.value.username;
    this.user.adress = this.loginForm.value.name;
    this.user.password = this.loginForm.value.password;
    this.httpService.postData(this.user)
      .subscribe(
        (data: User) => {
          if (data) {
            (this.receivedUser = data);
            console.log(data);
            localStorage.setItem('id', data.userId);
            localStorage.setItem('token', data.id);
            this.router.navigate(['/price']);
          }
        },
        error => console.log(error)
      );
  }
}
