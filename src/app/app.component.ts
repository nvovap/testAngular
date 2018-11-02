import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {

	users = []
  searchStr = ''

	constructor(private userService: UserService) {
	}
  

  	ngOnInit() {
  		this.userService.getUsers().subscribe(users => {
        console.log(users)
        this.users = users
      });

  		//this.users = this.userService.users;
  	}
  	

}
