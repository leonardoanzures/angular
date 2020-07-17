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

  constructor(protected userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserUser()
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


