  
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BASE_URL,ITEM_LIST} from '../url/ConstantURL';
import axios from 'axios';

const ProductService = async() => {


console.log('fetchProduct',BASE_URL(),ITEM_LIST());
        try {
            const accessToken = await AsyncStorage.getItem('accessToken');
            console.log('accessoken :', accessToken);
            const response = await axios.get(
              `${BASE_URL()}${ITEM_LIST()}`,
              {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              }
            );
            // console.log('Item data ============',response.data.data);
            const data =response.data.data;

            
            console.log('Product service data',data);
            console.log('Item name',response.data.data.itemList[0].itmName);
            console.log('Item price',response.data.data.itemList[0].itemPriceList[0].itmPrice);
            await AsyncStorage.setItem('productData', JSON.stringify(data));
            return data
          } catch (error) {
            console.error(error);
          }
}

export default ProductService