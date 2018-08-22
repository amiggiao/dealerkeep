import { Pipe, PipeTransform } from '@angular/core';
import { User } from './models/user';
@Pipe({
    name: 'userFilter',
    pure: false
})
export class UserFilterPipe implements PipeTransform {
    transform(userList: User[], filter: string): any {
        if (!userList || !filter) {
            return userList;
        }
        const name = filter.toLowerCase();
        return userList.filter(user => user.firstName.toLowerCase().indexOf(name) !== -1 ||
            user.lastName.toLowerCase().indexOf(name) !== -1);
    }
}
