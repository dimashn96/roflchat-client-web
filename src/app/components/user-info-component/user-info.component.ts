import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {Response} from '../../models/ResponseModel';
import {User} from '../../models/UserModel';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  user: User;
  token = window.localStorage.token;

  constructor(private httpService: HttpService, private router: Router) {}

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
      this.router.navigate(['user/authorization']);
    }
  }

  exit() {
    if (this.token && typeof this.token === 'string') {
      localStorage.removeItem('token');
      this.router.navigate(['user/authorization']);
    }
  }

}
