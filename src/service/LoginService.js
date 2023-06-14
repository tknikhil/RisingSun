
import {BASE_URL,LOGIN_URL} from '../url/ConstantURL';

const loginService = async (username,password) => {
    console.log(BASE_URL,LOGIN_URL);
    try {
        const response = await fetch(`${BASE_URL()}${LOGIN_URL()}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });
    
        const data = await response.json();
    
        if (!response.ok) {
          throw new Error(data.message);
        }
      } catch (error) {
        throw new Error(error);
      }
}

export default loginService