import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: any[] = []
  title = "DashBoard"

  constructor(protected userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserDash()
    .subscribe(
      (data) => { //Success
        this.users = data['results']
      },
      (error) => {
        console.error(error)
      }
    )
  }

}
