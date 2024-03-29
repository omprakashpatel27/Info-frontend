import axios from "axios";
import { cardProp } from "../CardComponent/cardProp";
import {dataTest } from "../common-data/dataTest";

export const onClickMethod = (inputValue) => {


     const postData = {
          data: inputValue
     }

     axios.post('http://localhost:3001/api/search', postData)
          .then(function (response) {
               if(response.data.data !== null) dataTest.push(response.data.data);
               localStorage.setItem('myData', JSON.stringify(dataTest));
               window.location.reload();
               console.log(response);
          })
          .catch(function (error) {
               console.log(error);
          })
}