import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credentials: {
    email: string;
    password: string;
  } = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login = () => {
    this.authService.authenticate(this.credentials.email, this.credentials.password).then((data) => {
      console.log(data);
    })
  }

}
