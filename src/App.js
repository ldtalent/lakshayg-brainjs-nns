import React, { useEffect, useState, Fragment } from "react";
import loading from './loading.gif'
import { connect} from "react-redux";
//import {withRouter} from 'react-router-dom'
import {PropTypes} from 'prop-types'
import {trainNetwork, result , white, black, predict} from './actions/contrastpicker.js'
const App=({trainNetwork, training, result, resultN, white, red, green , blue, whiteReturning, blackReturning, black, predict, closeResult}) =>  {
  
    useEffect(() => {
      console.log('Hello')
     trainNetwork();
     result(red,green,blue)

    }, []);
    
    const handleWhite = async (e) => {
      console.log('Handling white')
     white(red,green,blue);
     
   //result(red,green,blue)
  };
  const handleBlack = async (e) => {
    console.log('Handling black')
   black(red,green,blue);
   
 //result(red,green,blue)
};

const [data,setData] = useState({
  r:0,g:0,b:0
})
const {r,g,b} = data;
const handleRed = async(e) => {
  setData({
    ...data,
     r : e.target.value / 255
  })

}
const handleGreen = async(e) => {
  setData({
    ...data,
     g : e.target.value / 255
  })

}
const handleBlue = async(e) => {
  setData({
    ...data,
     b : e.target.value / 255
  })
}

const predictResults = async(e) => {
  
  if(b>=0 && b<=1 && r>=0 && r<=1 && g>=0 && g<=1){
 predict(r,g,b)
  }
}
 return (
   <React.Fragment >
   {training ? <div style={{'textAlign':'center', 'fontSize':'50px', 'marginTop':'15%'}}>Training Network
   <div><img src = {loading}/></div>
   </div>:
  
  <div style={{'backgroundColor':'rgb(' + red*255 + ',' + green*255+ ',' +blue*255 + ')', 'width':window.innerWidth, 'height':window.innerHeight}}>
  <div style= {{'textAlign':'center', 'fontSize':'20px'}}>
  <div style={{'color':'white'}}>This is white on this page</div>
  <div style={{'color':'black'}}>This is black on this page</div>
  <br/>
  <div style={{'color': resultN > 0.5 ? 'white' : 'black'}}>The font-color of this text is predicted by the neural network</div>
  
  </div>

  <div style= {{'textAlign':'center', 'fontSize':'20px'}}>
  <p style={{'color': resultN > 0.5 ? 'white' : 'black'}}>Which one is more readable ?</p>
  <button className="btn btn-light" style={{'marginRight':'5px'}} onClick={handleBlack}>BLACK</button>
  <button className="btn btn-dark" onClick={handleWhite}

  >WHITE</button>
  </div>
  <br/>
  <form>
  <div className="form-group">
  <div className = "row" style= {{'padding':'10px','textAlign':'center', 'fontSize':'5px', 'backgroundColor': 'white', 'width': 'fit-content', 'marginLeft':'auto', 'marginRight':'auto', 'marginTop':'20px'}}>
  <span><input required className = "form-control" type = "number" min = "0" max = "255" placeholder="Red" style={{'margin':'5px', 'width': 'fit-content'}} onChange={handleRed}></input></span>
  <span><input required className = "form-control" type = "number" min = "0" max = "255" placeholder="Green" style={{'margin':'5px', 'width': 'fit-content'}} onChange={handleGreen}></input></span>
  <span><input required className = "form-control" type = "number" min = "0" max = "255" placeholder="Blue" style={{'margin':'5px', 'width': 'fit-content'}} onChange={handleBlue}></input></span>
  <button type="button" className="btn btn-success" onClick={predictResults}>Set Background Color and Predict</button>
  </div>
  </div>
  </form>
  
  <div style= {{'textAlign':'center', 'fontSize':'80px', 'color': resultN > 0.5 ? 'white' : 'black', 'marginTop': '20px'}}>
  {!closeResult ? resultN > 0.5 ? 'WHITE' : 'BLACK' : null}
  <div style={{'bottom':'40px','marginLeft':'auto', 'marginRight':'auto','left':'0','right':'0','width':'100%', 'textAlign':'center', 'fontSize':'0.7rem', 'position':'absolute'}}>The training data is frequently getting updated and the neural network's learnings are not wiped out even on closing the browser window
  <div>Simultaneously update the training data and predict results</div>
  
  </div>
  </div>
  </div>
 
  
  }
   </React.Fragment>
 )

}
App.propTypes = {
  training:PropTypes.bool.isRequired,
  trainNetwork: PropTypes.func.isRequired,
  result:PropTypes.func.isRequired,
  resultN:PropTypes.number.isRequired,
  red:PropTypes.number.isRequired,
  green:PropTypes.number.isRequired,
  blue:PropTypes.number.isRequired,
  whiteReturning:PropTypes.bool.isRequired,
  blackReturning:PropTypes.bool.isRequired,
  predict:PropTypes.func.isRequired,
  closeResult:PropTypes.bool.isRequired

}

const mapStateToProps = (state) => ({
 training:state.contrastpicker.training,
 resultN:state.contrastpicker.resultN,
 red:state.contrastpicker.red,
 green:state.contrastpicker.green,
 blue:state.contrastpicker.blue,
 whiteReturning:state.contrastpicker.whiteReturning,
 blackReturning:state.contrastpicker.blackReturning,
 closeResult: state.contrastpicker.closeResult
 });
export default connect(mapStateToProps, {
 trainNetwork, result, white, black, predict
})(App);
