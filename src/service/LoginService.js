
import {BASE_URL,LOGIN_URL} from '../url/ConstantURL';

const loginService = async (username,password) => {
  // console.log(username,password);
    // console.log(BASE_URL,LOGIN_URL);
    try {
        const response = await fetch(`${BASE_URL()}${LOGIN_URL()}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(
            {
              data:{
                loginData:{
                  userCode:username,
                  password:password,}
              }
          }),
      
        });
        console.log(response);
      //  console.log(
      //   JSON.stringify({
      //     data:{
      //       loginData:{
      //         username:username,
      //         password:password,}
      //     }
        
      // }));
    
        const data = await response.json();
         console.log(data);
    
        if (data.result.errNo!==200) {
          throw new Error(data.message);
        }
        return data;
      } catch (error) {
        throw new Error(error);
      }
}

export default loginService