import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  users: any[] = []
  title = "Usuarios"

  dataInfo: any;

  constructor(protected userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserUser()
    .subscribe(
      (data) => { //Success
        this.users = data['results']
        //this.users = data['info']
      },
      (error) => {
        console.error(error)
      }
    ),

    this.userService.getUserUser()
    .subscribe(
      (data) => { //Success
        this.dataInfo = data['info']
      },
      (error) => {
        console.error(error)
      }
    )

  }

}


