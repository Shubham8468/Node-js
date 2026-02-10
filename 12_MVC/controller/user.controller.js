 
 import {userList} from '../Model/user.models.js'
 export function handelUsers(req,resp){
    const userData=userList();
    console.log(userData)
  resp.render('usersv',{users : userData});
}