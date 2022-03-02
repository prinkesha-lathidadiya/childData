import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serchUser'
})
export class SerchUserPipe implements PipeTransform {

 
  transform(
    users: any[],
    nameSearch?: string,
    emailSearch?: string,
    roleSearch?: string,
    accountSearch?: string
  ): any[] {

    if (!users) return [];
    if (!nameSearch) return users;
    nameSearch = nameSearch.toLocaleLowerCase();
    users = [...users.filter(user => user.displayName.toLocaleLowerCase().includes(  nameSearch))];

    if (!emailSearch) return users;
    emailSearch = emailSearch.toLocaleLowerCase();
    users = [...users.filter(user => user.email.toLocaleLowerCase().includes(emailSearch))];

    if (!roleSearch) return users;
    roleSearch = roleSearch.toLocaleLowerCase();
    users = [...users.filter(user => user.role.toLocaleLowerCase().includes(roleSearch))];

    return users;
  }

}
