import { Component } from '@angular/core';
import { User } from '../../models/UserModel';
import { Response } from '../../models/ResponseModel';
import { HttpService } from '../../services/http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent {

  user: User = new User();
  message: string;
  done = false;

  constructor(private httpService: HttpService, private router: Router) { }

  submit() {
    this.httpService.addUser(this.user).subscribe((res: Response) => {
        this.done = true;
        this.router.navigate(['user/authorization']);
        if (typeof res.data === 'string') {
          this.message = res.data;
        }
      },
      error => console.log(error)
    );
  }

}
