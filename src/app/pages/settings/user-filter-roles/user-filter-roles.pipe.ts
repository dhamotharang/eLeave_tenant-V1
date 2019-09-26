import { Pipe, PipeTransform } from '@angular/core';

/**
 * This is a pipe for Setting page
 * @export
 * @class UserFilterRolesPipe
 * @implements {PipeTransform}
 */
@Pipe({
  name: 'userFilterRoles'
})
export class UserFilterRolesPipe implements PipeTransform {

  /**
   * This method is to return data based on filtered user
   * in Setting page
   * @param {*} value
   * @param {*} args
   * @returns {*}
   * @memberof UserFilterRolesPipe
   */
  transform(value, args): any {
    return (args.roles === 'All roles') ? value : value.filter(userObj => userObj.role === args.roles);
  }

}
