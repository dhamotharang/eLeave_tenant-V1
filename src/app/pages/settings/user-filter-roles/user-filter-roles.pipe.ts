import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userFilterRoles'
})
export class UserFilterRolesPipe implements PipeTransform {

  transform(value, args): any {
    return (args.roles === 'All roles') ? value : value.filter(userObj => userObj.role === args.roles);
  }

}
