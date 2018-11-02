import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable()
export class UserService {

	constructor(private http: Http) {
	}


	getUsers() {
		return this.http.get('https://randomuser.me/api/?results=10').pipe(map(result =>  result.json())).pipe(map(result =>  result.results))
    .pipe(map(users =>  users.map(user => {
      return {
        name: user.name.first+' '+user.name.last,
        image: user.picture.large,
        adress: user.location.city + ' ' + user.location.state + ' ' + user.location.street,  
        geo: user.location.coordinates
      }
    })))
	}
  
  // users = [
  // 	{name: 'WFM 1'},
  // 	{name: 'WFM 2'},
  // 	{name: 'WFM 3'},
  // 	{name: 'WFM 4'},
  // 	{name: 'WFM 5'},
  // 	{name: 'WFM 6'}
  // ]

}