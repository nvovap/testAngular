import { Pipe } from '@angular/core';
import { filter } from 'rxjs/operators';


@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform{

	transform(users, value) {

    return users.filter(user => user.name.includes(value))

  }

}
