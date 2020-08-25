const initialState = {
    training : false,
    founding:false,
    resultN:0,
    red:Math.random(),
    green:Math.random(),
    blue:Math.random(),
    whiteReturning:false,
    blackReturning:false,
    predicting:false,
    closeResult:true
  };


export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case 'NETWORK_TRAINED':
        return {
            ...state,
            training:false
        }

       case 'TRAINING_ERROR':
           return {
               ...state,
               training:false
           } 
        case 'TRAINING':
            return {
                ...state,
                training:true
            } 
            
        case 'FOUNDING':
          return{
            ...state,
            founding:true
}
        case 'RESULT_FOUND':
          return {
            ...state,
            founding:false,
            resultN:payload.trained
          } 
         case 'FINDING_ERROR':
           return{
             ...state,
             founding:false
           }    
     case 'WHITE_RETURNED':
       return {
         ...state,
         red:payload.r,
         green:payload.g,
         blue:payload.b,
         resultN:payload.result,
        whiteReturning:false,
        closeResult:true
        }
    case 'WHITE_ERROR':
      return {
        ...state,
        whiteReturning:false,
        closeResult:true
      }   
    case 'WHITE_RETURNING' :
      return {
        ...state,
        whiteReturning:true
      }
      
      case 'BLACK_RETURNED':
        return {
          ...state,
          red:payload.r,
          green:payload.g,
          blue:payload.b,
          resultN:payload.result,
         blackReturning:false,
         closeResult:true
         }
     case 'BLACK_ERROR':
       return {
         ...state,
         blackReturning:false,
         closeResult:true
       }   
     case 'BLACK_RETURNING' :
       return {
         ...state,
         blackReturning:true
       }
       case 'PREDICTED':
        return {
          ...state,
          red:payload.r,
          green:payload.g,
          blue:payload.b,
          resultN:payload.result,
         predicting:false,
         closeResult:false
         }
     case 'PREDICT_ERROR':
       return {
         ...state,
         predicting:false,
         closeResult:true
       }   
     case 'PREDICTING' :
       return {
         ...state,
         predicting:true
       }
      default:
        return state;
    }
  }
  