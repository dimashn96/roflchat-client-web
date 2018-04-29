import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {Response} from '../../models/ResponseModel';
import {User} from '../../models/UserModel';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User;
  token = window.localStorage.token;

  constructor(private httpService: HttpService, private router: Router, private mainComp: AppComponent) {}

  ngOnInit() {
    if (this.token && typeof this.token === 'string') {
      this.httpService.getUser(this.token).subscribe((res: Response) => {
          if (res.status === 200 && res.data) {
            this.user = res.data;
          }
        },
        error => console.log(error)
      );
    } else {
      this.router.navigate(['auth']);
    }
  }

  exit() {
    if (this.token && typeof this.token === 'string') {
      localStorage.removeItem('token');
      this.router.navigate(['']);
    }
  }

}
