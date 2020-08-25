import axios from 'axios'
// const domain = "http://localhost:4000"
const domain = "https://apicontrastpicker.herokuapp.com"
 export const trainNetwork = () => async (dispatch) => {
    try {
    dispatch({
      type:'TRAINING'
    })
console.log('Dispatching')
   const result = await axios.get(`${domain}/train`)
     console.log(result.data)
      dispatch({
        type: 'NETWORK_TRAINED',
        payload: { trained: result.data},
      });
    } catch (error) {
   
      if (error.response) {
  
  
        console.log(error.response.data.errors);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log(error.request);
      } else {
        
        console.log("Error", error.message);
      }
      console.log(error);
  
      dispatch({
        type: 'TRAINING_ERROR',
      });
    }
  };

  export const result = (red,green,blue) => async (dispatch) => {
    try {
    dispatch({
      type:'FINDING'
    })
//console.log('Dispatching')
   const result = await axios.get(`${domain}/result/${red}/${green}/${blue}`)
     console.log(result.data)
      dispatch({
        type: 'RESULT_FOUND',
        payload: { trained: result.data.result},
      });
      console.log(result.data.result)
    } catch (error) {
   
      if (error.response) {
  
  
        console.log(error.response.data.errors);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log(error.request);
      } else {
        
        console.log("Error", error.message);
      }
      console.log(error);
  
      dispatch({
        type: 'FINDING_ERROR',
      });
    }
  };


  export const white = (red,green,blue) => async (dispatch) => {
    try {
      dispatch({
        type: 'WHITE_RETURNING'
      });
     const result = await axios.get(`${domain}/white/${red}/${green}/${blue}`)
     console.log(result.data)

      dispatch({
        type: 'WHITE_RETURNED',
        payload: result.data,
      });
      console.log(result.data)
    } catch (error) {
   
      if (error.response) {
  
  
        console.log(error.response.data.errors);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log(error.request);
      } else {
        
        console.log("Error", error.message);
      }
      console.log(error);
  
      dispatch({
        type: 'WHITE_ERROR',
      });
    }
  };

  export const black = (red,green,blue) => async (dispatch) => {
    try {
      dispatch({
        type: 'BLACK_RETURNING'
      });
     const result = await axios.get(`${domain}/black/${red}/${green}/${blue}`)
     console.log(result.data)

      dispatch({
        type: 'BLACK_RETURNED',
        payload: result.data,
      });
      console.log(result.data)
    } catch (error) {
   
      if (error.response) {
  
  
        console.log(error.response.data.errors);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log(error.request);
      } else {
        
        console.log("Error", error.message);
      }
      console.log(error);
  
      dispatch({
        type: 'BLACK_ERROR',
      });
    }
  };

  export const predict = (red,green,blue) => async (dispatch) => {
    try {
      dispatch({
        type: 'PREDICTING'
      });
      console.log(red + ' ' + green + ' ' + blue)
     const result = await axios.get(`${domain}/predict/${red}/${green}/${blue}`)
     console.log(result.data)

      dispatch({
        type: 'PREDICTED',
        payload: result.data,
      });
      console.log(result.data)
    } catch (error) {
   
      if (error.response) {
  
  
        console.log(error.response.data.errors);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log(error.request);
      } else {
        
        console.log("Error", error.message);
      }
      console.log(error);
  
      dispatch({
        type: 'PREDICT_ERROR',
      });
    }
  };
