import {Component} from '@angular/core';
import {User} from '../../models/UserModel';
import {Response} from '../../models/ResponseModel';
import {HttpService} from '../../services/http.service';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-authorization.component.html',
  styleUrls: ['./user-authorization.component.scss']
})
export class UserAuthorizationComponent {

  user: User = new User();
  message: string;
  done = false;

  constructor(private httpService: HttpService, private router: Router, private mainComp: AppComponent) {
  }

  submit() {
    this.httpService.auth(this.user).subscribe((res: Response) => {
        if (res.status === 200) {
          this.done = true;
          if (res.data.token && typeof res.data.token === 'string') {
            window.localStorage.setItem('token', res.data.token);
            this.router.navigate(['account']);
          }
        }
      },
      error => console.log(error)
    );
  }

}
